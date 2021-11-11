
const Search = ({ handleSearchNote, setSearchText }) => {

    return (
        <header className="search-header">
                <label htmlFor="note-search">
                    <input 
                        onChange={(event) => handleSearchNote(event.target.value)} 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Search Notes..."
                        />
                </label>
        </header>
    )
}

export default Search;