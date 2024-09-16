import React, { useState } from 'react';
import BurgerMenu from "./MenuBurger";
import SearchModal from "../Components/SearchModal";
import { artisans } from "../Components/Entreprise";
import '../SCSS/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../assets/img/Logo.png";

const Header = () => {
    const [filteredArtisans, setFilteredArtisans] = useState([]);
    const [isSearchVisible, setSearchVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Fonction de filtrage des artisans
    const handleChange = (term) => {
        setSearchTerm(term);
        if (term.trim() === '') {
            setFilteredArtisans([]);
            return;
        }
        const filtered = artisans.filter((artisan) => 
            artisan.nom.toLowerCase().includes(term.toLowerCase()) ||
            artisan.specialite.toLowerCase().includes(term.toLowerCase()) ||
            artisan.ville.toLowerCase().includes(term.toLowerCase())
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
                <img src={Logo} alt="logo du site" className="logo-img" />
            </div>
            <div className="search-icon" onClick={toggleSearch}>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </div>
            <SearchModal 
                onSearch={handleChange} 
                isVisible={isSearchVisible} 
                onClose={closeSearch} 
                filteredArtisans={filteredArtisans} 
            />
            <div className="burger-menu"> 
                <BurgerMenu />
            </div>
        </header>
    );
}

export default Header;
