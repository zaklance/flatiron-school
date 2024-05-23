import React from "react"

function Search({ query, setQuery }) {
    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." value={query} onChange={event => setQuery(event.target.value)} />
        </div>
    );
}

export default Search;