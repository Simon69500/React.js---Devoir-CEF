import Logo from '../assets/img/Logo.png';
import '../SCSS/Footer.scss';

import { NavLink } from "react-router-dom";


const Footer = () => {
   return (
    <div id="footer">
    <div className="logo">
        <img src={Logo} alt="logo de l'entreprise" className='logo-img'/>
    </div>
    <div className='adress'>
        <h4>Lyon</h4>
        <p>
        <small>
        101 cours charlemagne <br />
        CS 20033 <br />
        69269 LYON cedex 02 <br />
        France <br />
        +33 (0)4 26 73 40 00
        </small>
        </p>
    </div>
    <div className='pages'>
        <h4>Pages légales</h4>
        <NavLink to="/Mentions" className="link">Mentions légales</NavLink>
        <NavLink to="/Data" className="link">Données personelles</NavLink>
        <NavLink to="/Cookies" className="link">Cookies</NavLink>
        <NavLink to="/Acces" className="link">Accesibilités</NavLink>
    </div>
</div>
   )
}

export default Footer ;
