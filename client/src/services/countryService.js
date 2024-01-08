

import axios from 'axios';

const getAllCountries = async () => {
  try {
    const response = await axios.post('http://localhost:5000/graphql', {
      query: `
        query {
          getAllCountries {
            name
            code
            continent {
              name
            }
            languages {
              name
            }
          }
        }
      `
    });

    return response.data.data.getAllCountries;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

const createCountry = async (countryData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/create-country', countryData);

    return response.data
  } catch (error) {
    console.error('Error creating country:', error.request);
    throw error;
  }
};

export { getAllCountries, createCountry };
