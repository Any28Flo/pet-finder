import { Dog } from '../types';
import { Card,CardHeader, CardBody,Heading, Image} from "@chakra-ui/react"

interface CardProps {
    data: Dog
}
const CardDog = ({ data }: CardProps) => {

    const { img, name, age, zip_code, breed } = data;

    return (
        <Card maxW='sm' bg='tomato' borderWidth='1px' borderRadius='lg' >
            <Image
                fallbackSrc='https://via.placeholder.com/150'
                boxSize='150px'
                objectFit='cover'
                src={img}
                alt='cute dog' />

            <CardHeader>
                <Heading size='md'>{name}</Heading>
            </CardHeader>

            <CardBody>

            </CardBody>
            
        </Card>
    )
}

export default CardDog