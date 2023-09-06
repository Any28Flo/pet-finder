import List from "../components/List";
import { useAppContext } from "../context";

const Search = () => {
  const {dogs}  = useAppContext();
  return (
    <main>
      {/* Filter */}
      <List  dogs={dogs}/>
      {/* Paginador */}
    </main>
  )
}

export default Search