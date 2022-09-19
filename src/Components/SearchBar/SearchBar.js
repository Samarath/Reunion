import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='searchbar'>

           <div className='search_text'>
            <p>Search Properties to rent</p>
           </div>

           <div>
            <input type='text' placeholder="searchWithSearchBar"/>
           </div>

        </div>
    )
}

export default SearchBar;