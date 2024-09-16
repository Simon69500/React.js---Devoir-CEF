import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../SCSS/MenuBurger.scss";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    return (
        <div id="burger-menu">
            <button 
                className="burger-icon" 
                onClick={toggleMenu} 
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>

            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/" end >Accueil</NavLink>
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/List" >Liste des Artisans</NavLink>
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/Artisan" >Fiche Artisan</NavLink>
            </nav>
        </div>
    );
};

export default BurgerMenu;
