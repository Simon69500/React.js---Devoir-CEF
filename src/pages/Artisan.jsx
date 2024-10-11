import Header from "../Components/Header";
import Footer from "../Components/Footer";
import data from "../datas.json";
import ContactForm from "../Components/ContactForm";
import '../SCSS/Artisan.scss'

import { createStars } from "../fontAwesomeConfig";
import { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

// Page pour prendre Contact avec l'artisan 

const Artisan = () => {
    
    const {id} = useParams();
    const [artisans, setArtisans] = useState(); 

    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/List');
    };

    useEffect(()=> {
        const selectArtisan = data.find((item) => item.id === id ) ;
        setArtisans(selectArtisan);
    }, [id]);

    if (!artisans) {
        return (
            <div>
                <p>Chargement de l'artisan en cours ...</p>
                <button onClick={handleBack}>Retour a la liste des artisans</button>
            </div>
        )
    };



    return (
        <div id="artisan">
            <Header/>
            <div className="main">
            <h1>Mon Artisans</h1>
                <div className="artisan-detail">
                    <h2>{artisans.name}</h2>
                     
                    <div className="rating">
                                {createStars(artisans.note)}
                            </div>

                    <p className="text">
                                <strong>spécialité : </strong>
                                <span className="text-data">{artisans.specialty}</span>
                            </p>

                            <p className="text">
                                <strong>Localisation : </strong>
                                <span className="text-data"> {artisans.location}</span>
                            </p>

                            <p className="text">
                                <strong>A propos : </strong>
                                <span className="text-about"> {artisans.about}</span>
                            </p>

                           <ContactForm/>

                           <a href={artisans.website} target="_blank"  rel="noreferrer" className="website">visite mon site</a>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Artisan ;
