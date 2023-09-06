import { Dog } from "../types"
import Card from "./Card"

interface ListPetsProps {
    dogs: Dog[]
}

const List = ({dogs}:ListPetsProps) => {

  return (
    <div>
        <h2>{ dogs.length ? "Mascotas" : "No mascotas"}</h2>
        {
            dogs.map((dog)=>{
                return <Card data={dog}/>
            })
        }
    </div>
  )
}

export default List