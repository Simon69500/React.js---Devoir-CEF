import '../SCSS/SearchBar.scss'
import React, {useState} from 'react';

const SearchBar = ({onSearch, isVisible, onClose}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        onSearch(term);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div id="search-bar">
            <button className="close-btn" onClick={onClose}>X</button>
            <input type="text" value={searchTerm} onChange={handleChange} placeholder="Rechercher un artisan..." />
        </div>
    );
};

export default SearchBar;
