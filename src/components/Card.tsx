import { Dog} from '../types';

interface CardProps{
    data: Dog
}
const Card = ({data}:CardProps) => {
  const { img, name, age, zip_code, breed}=data
  return (
    <div>
        <div className="card-bg">
            <span className="icon-primary">
                <img src="" alt="" />
            </span>
            <div className="card-title">
                <p>{age} / {breed}</p> 
            </div>
            <div className="card content">
                <span className="icon-secondary">
                    <p>{name}</p>
                </span>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Card