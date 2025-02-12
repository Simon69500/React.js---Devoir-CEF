import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

// Fichier pour les icons et les notes artisans

// Ajouter les icônes à la bibliothèque
library.add(faMagnifyingGlass,
    faChevronRight,faChevronLeft,   //chevrons pour le top 3 artisans 
     fa1, fa2, fa3, fa4,           //numéro pour la page accueil 
     solidStar, regularStar       // les étoiles pour les notes rempli et vide .    
    );

// Fonction pour créer des étoiles
export const createStars = (rating) => {
    const totalStars = 5; // le total d'étoile qui peuvent être afficher 
    const stars = [];     // représente un tableau vide comme valeur 

    for (let i = 0; i < totalStars; i++) {   // une boucle qui s'éxecute tant que i est inférieur a totalStars(5)
        if (i < rating) {
            stars.push(<FontAwesomeIcon key={i} icon="fa-solid fa-star" style={{ color: '#ffd700' }} />);     // si i est inf à rating alors une d'etoile(remplie) est ajouté , on lui donne une couleur or
        } else {
            stars.push(<FontAwesomeIcon key={i} icon="fa-regular fa-star" style={{ color: '#ccc' }} />);      // sinon i est egal ou sup a rating , une etoile vide est ajouté , on lui donne une couleur grise
        }
    }

    return stars;
};
