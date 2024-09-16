import React from 'react';
import '../SCSS/SearchModal.scss'; 

const SearchModal = ({ isVisible, onSearch, onClose, filteredArtisans }) => {
  const handleChange = (event) => {
    onSearch(event.target.value.toLowerCase());
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="search-modal">
      <div className="search-modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Rechercher un artisan..."
        />
        {filteredArtisans.length > 0 && (
          <div className="search-results">
            <ul>
              {filteredArtisans.map((artisan) => (
                <li key={artisan.id}>
                  {artisan.nom} - {artisan.specialite} - {artisan.ville}
                </li>
              ))}
            </ul>
          </div>
        )}
        {filteredArtisans.length === 0 && (
          <p className="no-results">Aucun artisan trouvé</p>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
