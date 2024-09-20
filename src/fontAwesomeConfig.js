import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

// Ajouter les icônes à la bibliothèque
library.add(faMagnifyingGlass,
    faChevronRight,faChevronLeft,
     fa1, fa2, fa3, fa4,
     solidStar, regularStar    
    );

// Fonction pour créer des étoiles
export const createStars = (rating) => {
    const totalStars = 5; 
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<FontAwesomeIcon key={i} icon="fa-solid fa-star" style={{ color: '#ffd700' }} />);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon="fa-regular fa-star" style={{ color: '#ccc' }} />);
        }
    }

    return stars;
};
