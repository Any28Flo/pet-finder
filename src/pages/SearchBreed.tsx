import {useState} from 'react'
import FormBreeds from '../components/FormBreeds';
const opt =[
      "Affenpinscher",
    "Afghan Hound",
    "African Hunting Dog",
    "Airedale",
]
const SearchBreed = () => {
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const [breeds, setBreeds] = useState(opt);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    
    const optionValue =event.target?.value
    
    if (!selectedBreeds.includes(optionValue)) {
        setSelectedBreeds([...selectedBreeds, optionValue]);
    }else {
        setSelectedBreeds(selectedBreeds.filter((option) => option !== optionValue));
    }
    }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(selectedBreeds);
}
  return (
    <div>
       <FormBreeds 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            breeds={breeds}
            selectedBreeds={selectedBreeds}
             />
    </div>
  )
}

export default SearchBreed