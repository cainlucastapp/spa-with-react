//Dependencies
import './SearchBar.css';

function SearchBar({ search, onSearchChange }) {
  return (
    <>
      <div className="search">
        <input className="bordered" type="text" name="search" placeholder="Search Projects..." value= {search} onChange={onSearchChange}/>
      </div>
    </>
  )
}

export default SearchBar;