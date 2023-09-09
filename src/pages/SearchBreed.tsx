import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import FormBreeds from '../components/FormBreeds';
import Spinner from "../components/Spinner";
import Paginate from '../components/Paginate';
import Message from '../components/Message';

import { getDataWithHeaders } from '../db/fetchRewardMethods';
import { MessageStatus } from '../types';
import { useAppContext } from '../context';
import { Types } from '../context/breedsReducer';
import {Types as TypeDogs} from '../context/dogsReducer'

const SearchBreed = () => {

    const { state, dispatch } = useAppContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(15);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = state.breeds.breedsOptions.slice(indexOfFirstPost, indexOfLastPost);

    const [error, setError] = useState<string>("");

    const [isLoading, setIsLoading] = useState(false);
    
    const navigate = useNavigate();

    const paginate = (selected) => {
        console.log(selected);
        setCurrentPage(selected + 1);
    };

    const getBreeds = async () => {
        setIsLoading(true)

        try {

            const response = await getDataWithHeaders("/dogs/breeds");

            if (response) {
                setIsLoading(false)

                dispatch({
                    type: Types.SET_BREEDS,
                    payload: response
                })


            }
        } catch (error) {
            setIsLoading(false)

            setError(error);
        }
    }

    useEffect(() => {
        getBreeds();

    }, []);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {

        const optionValue = event.target?.value;
        console.log(optionValue)

        if (!state.breeds.selectedBreeds?.includes(optionValue)) {
            dispatch({
                type: Types.ADD_BREED,
                payload: {newItem: optionValue} 
            })
        } else {
           
            dispatch({
                type: Types.REMOVE_BREED,
                payload: {itemToRemove: optionValue} 
            })
        }
}
function array_to_string(array: Array<any>): string {
    return array.join("&");
  }

const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
        const response = await getDataWithHeaders(`/dogs/search?breeds=${array_to_string(state.breeds.selectedBreeds)}`);

        if (response) {
            console.log(response)
            setIsLoading(false)
            dispatch({
                type: TypeDogs.SET_DOGS_IDS,
                payload:{
                    dogsIds: response.resultIds,
                    total:response.total,
                    nextPage:response.next
                }
            })
            navigate("/results");
        }

    } catch (error) {
        setIsLoading(false)
        setError(error);
    }
}

const previousPage = () => {
    if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
    }
};

const nextPage = () => {
    if (currentPage !== Math.ceil(state.breeds.breedsOptions?.length / postsPerPage)) {
        setCurrentPage(currentPage + 1);
    }
};


if (isLoading) return <Spinner />

return (
    <div>
        {

            state.breeds.breedsOptions ?
                <div className="breed-list">
                    <FormBreeds 
                        handleSubmit={handleSubmit} 
                        handleChange={handleChange} 
                        breeds={currentPosts} 
                        selectedBreeds={state.breeds.selectedBreeds} />
                    <Paginate
                        postsPerPage={postsPerPage}
                        totalPosts={state.breeds.breedsOptions.length}
                        paginate={paginate}
                        previousPage={previousPage}
                        nextPage={nextPage}
                    />
                </div>
                :
                <div className="loading">Loading...</div>

        }

        {
            error && Message({ typeMessage: MessageStatus.Error, message: error })
        }

    </div>

)
}

export default SearchBreed