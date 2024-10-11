import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Erreur404 from "../assets/img/error-404.png";
import "../SCSS/Erreur404.scss";
import {NavLink } from "react-router-dom";

// Page 404 Erreur 

const Erreur = () => {
    return (
        <>
            <Header/>
                <main>
                    <div className="img-error">
                    <img className="img-404" src={Erreur404} alt="erreur 404" />
                    </div>
                    <article className="text-error">
                    <h2>Oops, la page que vous cherchez n'existe pas !</h2>
                    <p>On dirait que la page que vous cherchez a pris une pause café, ou qu'elle n'existe tout simplement pas.</p>
                    <p>Mais ne vous inquiétez pas, nous avons de nombreux artisans à découvrir !</p>
                    <div className="error-link">
                    <NavLink to="/" >Retour à l'acceuil</NavLink>
                    </div>
                    
                    <p>Besoin d'aide pour trouver ce que vous cherchez ? Nous sommes là pour vous guider.</p>
                    </article>
                    
                </main>
            <Footer/>
        </>
    )
}

export default Erreur ;
