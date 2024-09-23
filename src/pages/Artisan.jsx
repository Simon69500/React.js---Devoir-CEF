import Header from "../Components/Header";
import Footer from "../Components/Footer";
import data from "../datas.json";
import ContactForm from "../Components/ContactForm";
import '../SCSS/Artisan.scss'

import { createStars } from "../fontAwesomeConfig";
import { useState } from "react";
import { useParams } from "react-router-dom";



const Artisan = () => {
    
    const {id} = useParams();
    const [artisans] = useState(data); 

    const artisan = artisans.find(artisan => artisan.id === id); 

    return (
        <div id="artisan">
            <Header/>
            <div className="main">
            <h1>Mes Artisans</h1>
                <div className="list-artisan">
                    {artisans.length > 0 ? (
                        artisans.map((artisan) => (
                            <div className="card-artisan" key={artisan.id}>
                                <h3>{artisan.name}</h3>
                                <div className="rating">
                                {createStars(artisan.note)}
                                </div>
                                <p className="Text-artisan">
                                    <strong>Spécialité : </strong>
                                    <span className="artisan-text">{artisan.specialty}</span>
                                    </p>

                                <p className="Text-artisan">
                                    <strong>Ville : </strong>
                                    <span className="artisan-text">{artisan.location}</span>
                                    </p>

                                <p className="Text-about">
                                    <strong>A propos : </strong>
                                    <span className="about-text">{artisan.about}</span>
                                </p>

                                
                                <div className="formulaire">
                                    <ContactForm/>
                                </div>

                                <a href={artisan.website} target="_blank" rel="noopener noreferrer" className="website">Visitez mon site</a>
                            </div>
                        ))
                    ) : (
                        <p>Aucun Artisans trouvé.</p>
                    )}
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Artisan ;
