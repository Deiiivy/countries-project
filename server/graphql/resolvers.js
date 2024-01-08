const Country = require('../models/country.js');

const resolvers = {
  Query: {
    getAllCountries: async () => {
      try {
        const countries = await Country.find().populate('continent');

        return countries.map(country => ({
          ...country.toObject(),
          continent: country.continent ? { name: country.continent.name } : { name: 'Unknown' },
          flag: country.flag || 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/200px-Bandera_de_Espa%C3%B1a.svg.png', 
        }));
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
  Mutation: {
    createCountry: async (_, { input }) => {
      console.log('first')
      const newCountry = await Country.create(input);
      return newCountry;
    },
  },
};

module.exports = resolvers;
