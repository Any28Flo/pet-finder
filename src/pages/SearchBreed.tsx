import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import FormBreeds from '../components/FormBreeds';
import Spinner from "../components/Spinner";
import Paginate from '../components/Paginate';
import Message from '../components/Message';

import { getDataWithHeaders } from '../db/fetchRewardMethods';
import { MessageStatus } from '../types';
import { useAppContext } from '../context';


const SearchBreed = () => {

   const { breeds, dispatch } = useAppContext();
   const [selectedBreeds, setSelectedBreeds] = useState<string[]>([])
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(15);
 
 
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = breeds?.slice(indexOfFirstPost, indexOfLastPost);
 
    const [error, setError] = useState<string>("");

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    const paginate = (selected) => {
        console.log(selected);
        
      setCurrentPage(selected + 1);
    };



    const getBreeds = async() =>{
        setIsLoading(true)

        try {
            
            const response = await getDataWithHeaders("/dogs/breeds");
            
            if(response){
                setIsLoading(false)

                dispatch({
                    type: "setBreeds",
                    payload: {breeds:response}
                })

                
            }
        } catch (error){
            setIsLoading(false)

            setError( error);
        }
    }

    useEffect(() => {
        getBreeds();
      
    },[]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {

        const optionValue = event.target?.value;
        console.log(optionValue)

        if (!selectedBreeds.includes(optionValue)) {
         console.log("1")
         setSelectedBreeds([...selectedBreeds, optionValue])
          //  setSelectedBreeds([...selectedBreeds, optionValue]);
        } else {
            console.log
            //setSelectedBreeds(selectedBreeds.filter((option) => option !== optionValue));
        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async(e) => {
        e.preventDefault();       
          setIsLoading(true)
          try {
            const response = await getDataWithHeaders(`/dogs/search?breeds=${selectedBreeds}`);
            
            if(response){
              setIsLoading(false)
            
           
              navigate("/results");
            }

          } catch (error){
            setIsLoading(false)
            setError( error);
          }
    }

    const previousPage = () => {
        if (currentPage !== 1) {
           setCurrentPage(currentPage - 1);
        }
     };
   
     const nextPage = () => {
        if (currentPage !== Math.ceil(breeds?.length / postsPerPage)) {
           setCurrentPage(currentPage + 1);
        }
     };
   

    if(isLoading) return <Spinner />
    
    return (
        <div>
           {
            breeds ? 
                <div className="breed-list">
                    {<FormBreeds handleSubmit={handleSubmit} handleChange={handleChange} breeds={currentPosts} selectedBreeds={selectedBreeds}/>}
                    <Paginate
                    postsPerPage={postsPerPage}
                    totalPosts={breeds.length}
                    paginate={paginate}

                  previousPage={previousPage}
                  nextPage={nextPage}
               />
                </div>
                : 
                <div className="loading">Loading...</div>
             
           }
           
            {
                error &&  Message({typeMessage: MessageStatus.Error, message: error}) 
            }

        </div>

    )
}

export default SearchBreed