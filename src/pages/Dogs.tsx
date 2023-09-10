import { useEffect, useState } from 'react'
import { Container,Flex } from '@chakra-ui/react'

import { useAppContext } from '../context';

import { postData } from '../db/fetchRewardMethods';

import { Dog } from '../types';

import Card from '../components/CardDog';
import Paginate from '../components/Paginate';

const Dogs = () => {
    const { state, dispatch } = useAppContext();

    const [currentElements, setCurrentElements] = useState<Dog[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    console.log(`lastPost: ${indexOfLastPost}`)
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    console.log(`firstPost: ${indexOfFirstPost}`)

    const currentPosts = state.breeds.breedsOptions.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = (selected) => {
        console.log(selected);
        setCurrentPage(selected + 1);
    };

    const getData = async(arrayIds: string[]) =>{

        try {
            const newArray = arrayIds.slice(0,postsPerPage)
            console.log(newArray)

            const dataArray = await postData("/dogs", newArray)
            setCurrentElements(dataArray)
            console.log(dataArray)
        } catch (error) {
            console.log(error)
        }
    }

    const previousPage = () => {
        if (currentPage !== 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage !== Math.ceil(state.dogs.dogsIds?.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };


    useEffect(()=>{
        const newArray = state.dogs.dogsIds.slice(indexOfFirstPost,indexOfLastPost)
        getData(newArray)
    }, [currentPage])
    return (
        <Container  bg='blue.600' color='white' >
            <h2>Dogs</h2>
            <Flex color='white' flexWrap='wrap'>
            {
                currentElements && currentElements.map((element:Dog) =>{
                    return(
                        <Card key={element.id} data={element}/>
                    )
                })
            }
            </Flex>
            
            <Paginate  
                postsPerPage={postsPerPage} 
                totalPosts={state.dogs.dogsIds.length}
                paginate={paginate}
                previousPage={previousPage}
                nextPage={nextPage}
                />
        </Container>
        
    )
}

export default Dogs