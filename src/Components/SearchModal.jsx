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

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('search-modal') && typeof onClose === 'function') {
      onClose(); 
    }
  };
  

  if (!isVisible) {
    return null;
  }

  return (
    <main className="search-modal" onClick={handleOutsideClick}>
      <section className="search-modal-content">

        <button className="close-btn" onClick={onClose}>X</button>

        <input type="text" onChange={handleChange} placeholder="Rechercher un artisan..." />
        {filteredData.length > 0 && (
          <div className="search-results">
            <ul className='card'>
              {filteredData.map((data) => (
                <li className='card-detail' key={data.id} onClick={() => handleSelect(data.id)}>
                  <h3 className='title'>{data.name}</h3>
                  <p className='text'>Spécialité :
                    <span className='text-detail'>{data.specialty}</span>
                    </p>
                    <p className='text'>Ville :
                      <span className='text-detail'>{data.location}</span>
                      </p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {filteredData.length === 0 && (
          <p className="no-results">Aucun artisan trouvé</p>
        )}

      </section>
    </main>
  );
};

export default SearchModal;
