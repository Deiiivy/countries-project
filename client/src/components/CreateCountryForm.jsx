import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_COUNTRY } from '../graphql/countries.js';
import { createCountry, getAllCountries } from '../services/countryService.js'; 
import '../styles/createCountryForm.css'

function CreateCountryForm() {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCountryData = {
        code: e.target.code.value,
        name: e.target.name.value,
        language: e.target.language.value,
        continent: e.target.continent.value,
      };


      const newCountry = await createCountry(newCountryData);
      console.log('Nuevo país creado:', newCountry);


      const countries = await getAllCountries();
      console.log('Lista actualizada de países:', countries);
    } catch (error) {
      console.error('Error al crear país:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className='container-form'>
      <h1 className='title-form'>
        Crea un país
      </h1>
      <div className='box1'>
        <label>Código</label>
        <input type="text" name="code" placeholder="Country Code" />
        <label>Nombre</label>
        <input type="text" name="name" placeholder="Country Name" />
      </div>
      <div className='box2'>
        <label>Lenguaje</label>
        <input type="text" name="language" placeholder="Language" />
        <label>Continente</label>
        <input type="text" name="continent" placeholder="Continent" />
      </div>
      <button type="submit">Create Country</button>
    </form>
  );
}

export default CreateCountryForm;
