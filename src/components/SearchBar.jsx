function SearchBar({ search, onSearchChange }) {
  return (
    <>
      <div className="Search">
        <input type="text" name="search" placeholder="Search..." value= {search} onChange={onSearchChange}/>
      </div>
    </>
  )
}

export default SearchBar