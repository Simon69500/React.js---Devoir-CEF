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
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/Bâtiment/category/Bâtiment" end >Bâtiment</NavLink>
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/Services/category/Services" >Services</NavLink>
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/Fabrication/category/Fabrication" >Fabrication</NavLink>
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/Alimentation/category/Alimentation" >Alimentation</NavLink>
            </nav>
        </div>
    );
};

export default BurgerMenu;
