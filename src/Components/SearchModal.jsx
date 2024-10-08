import React from 'react';
import '../SCSS/SearchModal.scss'; 
import { useNavigate } from 'react-router-dom';

const SearchModal = ({ isVisible, onSearch, onClose, filteredData }) => {
  const navigate = useNavigate();

  const handleSelect = (id) => {
    if (onClose) {
      onClose(); 
    }
    navigate(`/List/${id}`);
  };

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
        <input type="text" onChange={handleChange} placeholder="Rechercher un artisan..." />
        {filteredData.length > 0 && (
          <div className="search-results">
            <ul>
              {filteredData.map((data) => (
                <li key={data.id} onClick={() => handleSelect(data.id)}>
                  {data.name} - {data.specialty} - {data.location}
                </li>
              ))}
            </ul>
          </div>
        )}
        {filteredData.length === 0 && (
          <p className="no-results">Aucun artisan trouvé</p>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
