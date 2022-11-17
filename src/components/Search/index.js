import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div className="search-bar">
         <div className="hidden">
            <input 
            type="search"  
            placeholder="search">
            </input>
         </div>
         <FaSearch />
        </div>
    )
} 

export default Search




