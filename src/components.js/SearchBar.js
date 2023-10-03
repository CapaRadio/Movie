import '../components.js/searchBar.css';

function SearchBar(){
    return( 

        
        <div className="bar">
            <form id="form">
                <input type="text" placeholder="Search" id="search" 
                className="search"/>
            </form>
        </div>

    )
}


export default SearchBar;