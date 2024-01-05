import React from 'react';
import { updateCountry } from '../services/countryService.js';

const ManageCountries = () => {
  const handleUpdateCountry = async () => {
    const countryId = 'ID_DEL_PAIS'; 
    const updatedData = {
      code: 'CO',
      name: 'Gran Colombia',
      language: 'Spanihs',
      continent: 'South America',
    };

    const result = await updateCountry(countryId, updatedData);
    console.log(result); 
  };

  return (
    <div>
      <h1>Administrar Países</h1>
      <button onClick={handleUpdateCountry}>Actualizar país</button>
    </div>
  );
};

export default ManageCountries;
