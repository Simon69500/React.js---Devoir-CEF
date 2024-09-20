import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    
    const handleChange = (event) => {
        onSearchChange(event.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Rechercher un artisan..."
                value={searchTerm} 
                onChange={handleChange} 
            />
        </div>
    );
};

export default SearchBar;
