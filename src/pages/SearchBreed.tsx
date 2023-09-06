import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import FormBreeds from '../components/FormBreeds';
import Spinner from "../components/Spinner";

import { getDataWithHeaders } from '../db/fetchRewardMethods';
import Message from '../components/Message';
import { MessageStatus } from '../types';
import Paginator from '../components/Paginator';

const opt = [
    "Affenpinscher",
    "Afghan Hound",
    "African Hunting Dog",
    "Airedale",
]
const SearchBreed = () => {
    const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
    const [breeds, setBreeds] = useState(opt);
    const [error, setError] = useState<string>("");

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const getBreeds = async () =>{
        setIsLoading(true)

        try {
            
            const response = await getDataWithHeaders("/dogs/breeds");
            
            if(response){
                setIsLoading(false)

                //setBreeds(response);
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

        const optionValue = event.target?.value

        if (!selectedBreeds.includes(optionValue)) {
            setSelectedBreeds([...selectedBreeds, optionValue]);
        } else {
            setSelectedBreeds(selectedBreeds.filter((option) => option !== optionValue));
        }
    }

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async(e) => {
        e.preventDefault();
        console.log(selectedBreeds);
       
          setIsLoading(true)
          try {
            const response = await getDataWithHeaders(`/dogs/search?breeds=${selectedBreeds}`);
            
            if(response){
              setIsLoading(false)
              console.log(response)
           
              navigate("/results");
            }
          } catch (error){
            setIsLoading(false)
            setError( error);
          }
    }
    if(isLoading) return <Spinner />
  
    return (
        <div>
            <FormBreeds
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                breeds={breeds}
                selectedBreeds={selectedBreeds}
            />
            {
                error &&  Message({typeMessage: MessageStatus.Error, message: error}) 
            }
            {
                <Paginator totalItems={10} currentPage={1} itemsPerPage={5}/>
            }

        </div>
    )
}

export default SearchBreed