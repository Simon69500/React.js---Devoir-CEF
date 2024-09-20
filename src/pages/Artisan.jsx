import Header from "../Components/Header";
import Footer from "../Components/Footer";

import data from "../datas.json";
import { useState } from "react";
import { createStars } from "../fontAwesomeConfig";

const Artisan = () => {
 

    return (
        <div id="artisan">
            <Header/>
            <div>
            <h1>Mes Artisans</h1>
            
            </div>
            <Footer/>
        </div>
    )
}

export default Artisan ;
