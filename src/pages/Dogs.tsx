import { useEffect, useState } from 'react'
import { Container,Flex } from '@chakra-ui/react'
import { useAppContext } from '../context';
import { postData } from '../db/fetchRewardMethods';
import Card from '../components/CardDog';
import { Dog } from '../types';

const Dogs = () => {
    const { state, dispatch } = useAppContext();

    const [currentElements, setCurrentElements] = useState([])

    const getData = async(arrayIds: string[]) =>{

        try {
            const newArray = arrayIds.slice(0,3)
            console.log(newArray)

            const dataArray = await postData("/dogs", newArray)
            setCurrentElements(dataArray)
            console.log(dataArray)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        const newArray = state.dogs.dogsIds.slice(0,3)
        console.log(newArray)
        getData(newArray)
    }, [])
    
    return (
        <Container maxW='2xl' bg='blue.600' color='white'>
            <h2>Dogs</h2>
            <Flex color='white'>

            </Flex>
            {
                currentElements && currentElements.map((element:Dog) =>{
                    return(
                        <Card key={element.id} data={element}/>
                    )
                })
            }
        </Container>
        
    )
}

export default Dogs