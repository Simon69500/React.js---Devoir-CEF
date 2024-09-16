import Header from "../Components/Header";

const Home = () => {
    return (
        <div id="home">
            <Header/>
         {/* Partie Trouve ton artisan */}
            <div id="tutorial">
            <h1>Comment trouver mon artisan !</h1>
            <div className="etape-1">
                <p>Choisir la catégorie d'artisanat dans le menu</p>
            </div>
            <div className="etape-2">
                <p>Choisir un artisan</p>
            </div>
            <div className="etape-3">
                <p>Le contacter via le formulaire de contact</p>
            </div>
            <div className="etape-4">
                <p>Une réponse sera apportée sous 48h</p>
            </div>
            </div>

            {/* Partie Trouve ton artisan */}
            <div id="artisan">
                <div>
                    <h2>Les artisans du mois</h2>
                    <div className="card">
                        <h3>nom de l'entreprise</h3>
                        <p>spécialisation de l'entreprise :</p>
                        <p>localisation :</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
