const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Country {
    _id: ID!
    name: String!
    code: String!
    continent: Continent!
    capital: String
    languages: [Language]
    createdAt: String!
  }

  type Continent {
    name: String!
  }

  type Language {
    name: String!
  }

  input CreateCountryInput {
    name: String!
    code: String!
    continent: ContinentInput!
    capital: String
    languages: [LanguageInput]
  }

  input ContinentInput {
    name: String!
  }

  input LanguageInput {
    name: String!
  }

  type Query {
    countries: [Country!]!
    getAllCountries: [Country!]!
  }

  type Mutation {
    createCountry(input: CreateCountryInput!): Country!
  }
`;

module.exports = typeDefs;
