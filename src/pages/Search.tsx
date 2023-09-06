import { useEffect, useState } from "react";
import List from "../components/List";
import { useAppContext } from "../context";

const Search = () => {
  const {dogs}  = useAppContext();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const getData = async()=>{
  
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <main>
      {/* Filter */}
      <List  dogs={dogs}/>
      {/* Paginador */}
    </main>
  )
}

export default Search