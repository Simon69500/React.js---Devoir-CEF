import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../SCSS/MenuBurger.scss";

// Menu Burger pour la version mobile

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    useEffect(() =>{
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        }
    }, [isOpen]);

    return (
        <main id="menu" ref={menuRef} >
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

            <nav className={`menu-detail ${isOpen ? 'open' : ''}`}>
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/Bâtiment/category/Bâtiment" end  >Bâtiment</NavLink>
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/Services/category/Services">Services</NavLink>
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/Fabrication/category/Fabrication" >Fabrication</NavLink>
                <NavLink className={({ isActive }) => `menu_1 ${isActive ? 'active' : ''}`} to="/Alimentation/category/Alimentation" >Alimentation</NavLink>
            </nav>
        </main>
    );
};

export default BurgerMenu;
