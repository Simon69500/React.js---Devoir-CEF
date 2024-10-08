import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../SCSS/Home.scss";
import data from "../datas.json";

import { useState } from "react";
import { createStars } from "../fontAwesomeConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4 } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Home = () => {

    const topArtisans = data.filter(data => data.top === true)
    
    const [currentIndex, setcurrentIndex] = useState(0);

    const nextSlide = () => {
        setcurrentIndex((prevIndex) => (prevIndex + 1) % topArtisans.length);
    };

    const prevSlide = () => {
        setcurrentIndex((prevIndex) => (prevIndex + 1 +topArtisans.length) % topArtisans.length );
    };

    return (
        <>
        <Header/>
        <main id="home">
         {/* Partie Comment trouver son artisan */}
         <h1>Comment trouver mon artisan !</h1>
            <section className="tutorial">
            <div className="etape">
                <FontAwesomeIcon icon={fa1} className="number" />
                <p>Choisir la catégorie d'artisanat dans le menu</p>
            </div>
            <div className="etape">
            <FontAwesomeIcon icon={fa2} className="number" />
                <p>Choisir un artisan</p>
            </div>
            <div className="etape">
            <FontAwesomeIcon icon={fa3} className="number" />
                <p>Le contacter via le formulaire de contact</p>
            </div>
            <div className="etape">
            <FontAwesomeIcon icon={fa4} className="number" />
                <p>Une réponse sera apportée sous 48h</p>
            </div>
            </section>

            {/* Partie Top des 3 artisans */}
            <section id="artisan-home">
                 <h2>Le Top 3 des artisans</h2>

                <div className="section">
                    {/* Bouton pour slider à gauche */}
                    <div className="slider">
                        <button className="button-home" onClick={nextSlide}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                    </div>

                     {/* Affichage de l'entreprise actuelle */}
                     <div className="card">
                        <h3>{topArtisans[currentIndex].name}</h3>
                        <p className="text">Spécialisation :
                             <span className="text-detail">{topArtisans[currentIndex].specialty}</span>
                             </p>
                        <p className="text">Localisation :
                            <span className="text-detail">{topArtisans[currentIndex].location}</span>
                            </p>
                        <div className="rating">
                            {createStars(topArtisans[currentIndex].note)}
                        </div>
                    </div>

                    {/* Bouton pour slider à droite */}
                    <div className="slider">
                        <button className="button-home" onClick={prevSlide}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default Home;
