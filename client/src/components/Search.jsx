import React from 'react';
import 'boxicons';
import '../styles/search.css';

function Search({ setSearchTerm }) {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='barSearch'>
      <div className='left-bar'>
        <input
          type="text"
          id='input'
          placeholder='Escribe el país que deseas ver'
          onChange={handleInputChange}
        />
      </div>
      <div className='right-bar'>
        <box-icon name='search' className='box-icon-search'></box-icon>
        <input type="button" className='boton' value="Buscar" />
      </div>
    </div>
  );
}

export default Search;