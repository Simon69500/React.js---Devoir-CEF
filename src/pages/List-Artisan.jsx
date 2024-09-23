import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";
import "../SCSS/SearchBar.scss";
import data from "../datas.json";
import "../SCSS/List-Artisan.scss";

import { createStars } from "../fontAwesomeConfig";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const List = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        // Filtrer les artisans en fonction du terme de recherche
        const filtered = data.filter(data =>
            data.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            data.specialty.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            data.location.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
            data.category.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        );
        setFilteredData(filtered);
    }, [searchTerm]);

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
                        <Link  key={data.id} to={`/artisan/${data.id}`} className="list-artisan">
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
                                {createStars(data.note)}
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
