import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";
import "../SCSS/SearchBar.scss";
import data from "../datas.json";
import "../SCSS/List-Artisan.scss";

import { createStars } from "../fontAwesomeConfig"; // j'importe ma fonction pour l'affichage de la note en étoile 
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// page de recherche des artisans , qui est lié au modal et a la fiche artisan , (code que je vais présenter pour le projet )

const List = () => {

    const {id} = useParams(); // permet d'acceder au parametre de URl 

    const [searchTerm, setSearchTerm] = useState("");        // valeur pour la barre de recherche 
    const [filteredData, setFilteredData] = useState(data);  // valeur pour le tableau de donné data.json    

// Filtrer les artisans en fonction du terme de recherche
    useEffect(() => {
        const sanitizedSearchTerm = searchTerm.trim()
        const filtered = data.filter(data =>   
            data.name.toLocaleLowerCase().includes(sanitizedSearchTerm.toLocaleLowerCase()) ||
            data.specialty.toLocaleLowerCase().includes(sanitizedSearchTerm.toLocaleLowerCase()) ||
            data.location.toLocaleLowerCase().includes(sanitizedSearchTerm.toLocaleLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm]);

// Utilisez l'ID pour faire défiler jusqu'à l'artisan correspondant
    useEffect(() => {
        if (id) {
            const artisanElement = document.getElementById(id);
            if (artisanElement) {
                artisanElement.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        }
    }, [id,filteredData]);

// Rendu sur la page 
    return (
        <div id="List-Artisan">
            <Header/>
            <div className="main">
            <h1>Liste des Artisans</h1>
            
             {/* Barre de recherche */}
             <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />


            {/* Affichage de l'entreprise actuelle */}
            <div className="artisans">
                {filteredData.length > 0 ? (
                    filteredData.map((data) => (
                        <Link
                        key={data.id}
                        to={`/artisan/${data.id}`}
                        className={`list-artisan ${id === String(data.id) ? 'selected' : ''}`} 
                        id={data.id}
                    >
                        <div>
                            <h3>{data.name}</h3>

                            <p className="text">
                                <strong>spécialité : </strong>
                                <span className="text-data">{data.specialty}</span>
                            </p>

                            <p className="text">
                                <strong>Localisation : </strong>
                                <span className="text-data"> {data.location}</span>
                            </p>
                            
                            <div className="rating">
                                {createStars(data.note)}  {/* fonction createStars appelé pour affiché selon le resultat de data.note le nombre d'etoile pleine ou vide pour donner la note exact */}
                            </div>
                        </div>
                        </Link>    
                    ))
                ) : (
                    <p>Aucun artisan trouvé.</p>
                )}
            </div>

            </div>
            <Footer />
            </div>
        )
       
}

export default List ;
