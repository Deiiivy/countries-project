import { gql } from "@apollo/client";

const GET_ALL_COUNTRIES = gql`
  query getAllCountries {
    countries{
      name
      code
      continent {
        name
      }
    }
  }
`;

const CREATE_COUNTRY = gql`
  mutation CreateCountry($input: CreateCountryInput!) {
    createCountry(input: $input) {
      code
      name
      continent {
        name
      }
      languages {
        name
      }
    }
  }
`;

export { GET_ALL_COUNTRIES, CREATE_COUNTRY };
