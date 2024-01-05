import { useQuery, gql } from '@apollo/client';

const EXTERNAL_GET_ALL_COUNTRIES = gql`
  query {
    countries {
      code
      name
      continent {
        name
      }
    }
  }
`;

function ExternalCountryList() {
  const { loading, error, data } = useQuery(EXTERNAL_GET_ALL_COUNTRIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error {error.message}</div>;

  return (
    <div>
      <h1>External List of Countries</h1>
      <ul>
        {data.countries.map(country => (
          <li key={country.code}>
            {country.name} - {country.continent.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExternalCountryList;
