import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import List from "./components/List";
import getCountries from "./services/countryService";

function App() {
  const [newSearch, setNewSeach] = useState("");
  const [countries, setCountries] = useState([]);
  const [filteredCountires, setFilteredCountires] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [detailToShow, setDetailToShow] = useState(null);

  useEffect(() => {
    getCountries().then((countryList) => setCountries(countryList));
  }, []);

  const handleSearch = (e) => {
    setNewSeach(e.target.value);
    const results = countries.filter((country) => country.name.common.toLowerCase().includes(newSearch.toLowerCase()));
    setFilteredCountires(results);
    results.length === 1 ? setShowDetails(true) : (setShowDetails(false), setDetailToShow(null));
  };

  const details = (country) => {
    setDetailToShow(country);
    setShowDetails(true);
  };

  return (
    <>
      <Search onChange={handleSearch} searchControl={newSearch} />
      <List
        list={filteredCountires}
        searchParam={newSearch}
        showDetail={showDetails}
        countryDetail={detailToShow}
        onClick={(country) => {
          details(country);
        }}
      />
    </>
  );
}

export default App;
