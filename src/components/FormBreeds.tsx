import React from 'react'

interface FormBreedsProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    breeds: string[];
    selectedBreeds: string[];
}
const FormBreeds = ({handleSubmit, breeds,selectedBreeds, handleChange}:FormBreedsProps) => {
  return (
    <div>
         <form onSubmit={handleSubmit}>
            <legend>What is your favorite breed?</legend>
            {
                breeds.map((breed, index) =>{
                    return( 
                    <label key={`breed-${index}`}>

                        <input type="checkbox" value={`${breed}`} checked={selectedBreeds.includes(breed)} onChange={handleChange}/>
                        {breed} 
                    </label>)
                })
            }
            <button type="submit">Continue</button>
        </form>
    </div>
  )
}

export default FormBreeds