import React, { useState } from 'react';
import BurgerMenu from "./MenuBurger";
import SearchModal from "../Components/SearchModal";

import data from '../datas.json';
import '../SCSS/Header.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../assets/img/Logo.png";
import { NavLink} from 'react-router-dom';

// Header

const Header = () => {
    const [filteredArtisans, setFilteredArtisans] = useState([]);
    const [isSearchVisible, setSearchVisible] = useState(false);

    // Fonction de filtrage des artisans
    const handleChange = (term) => {
        if (term.trim() === '') {
            setFilteredArtisans([]);
            return;
        }

        const filtered = data.filter((artisan) => 
            artisan.name.toLowerCase().includes(term.toLowerCase()) ||
            artisan.specialty.toLowerCase().includes(term.toLowerCase()) ||
            artisan.location.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredArtisans(filtered);
    };

    // Affiche ou masque la barre de recherche
    const toggleSearch = () => {
        setSearchVisible(!isSearchVisible);
    };

    // Ferme la barre de recherche
    const closeSearch = () => {
        setSearchVisible(false);
        setFilteredArtisans([]);
    };

    return (
        <header id="header">
            <div className="image">

               <NavLink to="/"> 
                    <img src={Logo} alt="logo du site" className="logo-img" />
               </NavLink> 
            </div>

            <div className="search-icon" onClick={toggleSearch}>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </div>
            
            <SearchModal 
                onSearch={handleChange} 
                isVisible={isSearchVisible} 
                onClose={closeSearch} 
                filteredData={filteredArtisans} 
            />
           
            <div className="burger-menu"> 
                <BurgerMenu />
            </div>
        </header>
    );
}

export default Header;
