import Header from "../Components/Header";
import Footer from "../Components/Footer";
import data from "../datas.json";
import "../SCSS/FicheArtisan.scss";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createStars } from "../fontAwesomeConfig";

// Page du menu - Fabrication 

const Fabrication = () => {

    const {category} = useParams();
    const [filteredArtisan, setFilteredArtisan] = useState([]);

    useEffect(() => {
        const filteredArtisan = data.filter((filter) => filter.category === category);
        setFilteredArtisan(filteredArtisan);
    }, [category]);


    return (
        <>
        <Header/>
        <main className="main-artisan">

        <h1>Artisans dans la catégorie : <span className="title"><br/>{category}</span></h1>
            <ul className="card-artisan">
                {filteredArtisan.length > 0 ? (
                    filteredArtisan.map(artisan => (
                        <li key={artisan.id} className="card">
                        <h3>{artisan.name}</h3>
                        <div className="rating">
                                {createStars(artisan.note)}
                        </div>
                        <p className="text">
                            <strong>spécialité : </strong>
                            <span className="text-data">{artisan.specialty}</span>
                        </p>

                        <p className="text">
                            <strong>Localisation : </strong>
                            <span className="text-data"> {artisan.location}</span>
                        </p>
                        <a href={artisan.website} className="website">visite mon site</a>
                    </li>
                    ))
                ) : (
                    <p>Aucun artisan trouvé dans cette catégorie.</p>
                )}
            </ul>
        </main>
        <Footer/>
        </>
    )
}

export default Fabrication ;
