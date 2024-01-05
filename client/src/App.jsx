import { gql, useQuery } from '@apollo/client';
import styles from './App.module.css';
import { useState } from 'react';
import { GET_ALL_COUNTRIES } from './graphql/countries.js';
import Search from './components/Search.jsx';
import SliderBar from './components/SliderBar.jsx';
import CreateCountryForm from './components/CreateCountryForm.jsx';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryList from './components/CountryList.jsx';


function App() {
  const [showDetails, SetDetails] = useState(true);
  const [info, setInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleCountryClick = (country) => {
    setInfo({
      name: country.name,
      continent: country.continent.name,
      flag: `https://flagsapi.com/${country.code}/flat/64.png`,
      capital: country.capital,
      languages: country.languages ? country.languages.map((language) => language.name).join(', ') : 'Unknown',
    });
    SetDetails(false);
  };

  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES);

  if (loading) return <div>cargando...</div>;
  if (error) return <div>Error {error.message}</div>;

  const filteredCountries = data.countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="app-container">
        <SliderBar />
        <Switch>
          <Route path="/crear-pais" component={CreateCountryForm} />
          <Route exact path="/">
            <div>
              <Search setSearchTerm={setSearchTerm} />
              <section className={styles.countries_container}>
                <CountryList handleCountryClick={handleCountryClick} />
              </section>
              <div className={styles.details_country} hidden={showDetails}>
                <div className={styles.details_btn}>
                  <button className={styles.btn} onClick={() => SetDetails(true)}>
                    <box-icon name="x"></box-icon>
                  </button>
                </div>
                <img src={info.flag} alt="flag" />
                <p>
                  <span className={styles.prop}>Name:</span> {info.name}
                </p>
                <p>
                  <span className={styles.prop}>Continent:</span> {info.continent}
                </p>
                <p>
                  <span className={styles.prop}>Capital:</span> {info.capital}
                </p>
                <p>
                  <span className={styles.prop}>Languages:</span> {info.languages}
                </p>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
