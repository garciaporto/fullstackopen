import { useEffect, useState } from "react";
import getWeather from "../services/weatherService";

const Details = ({ countryObj }) => {
  const [weather, setWeather] = useState(null);

  const languages = Object.values(countryObj.languages);
  const [lat, long] = countryObj.latlng;

  useEffect(() => {
    getWeather(lat, long)
      .then((info) => setWeather(info))
      .catch((err) => {
        console.log("Error fetching weather info:", err);
      });
  }, [lat, long]);

  useEffect(() => {
    console.log("info clima:", weather);
  }, [weather]);

  return (
    <>
      <section className="detail-section" id="detail">
        <div className="details-header">
          <span className="flag">{countryObj.flag}</span>
          <div className="data">
            <h2>{countryObj.name.common}</h2>
            <p>
              Capital: {countryObj.capital[0]} | Country area: {countryObj.area} Km²
            </p>
          </div>
        </div>
        <div className="grid-container">
          <div className="grid-item">
            <h3>Spoken languages</h3>
            <div className="badges-container">
              {languages.map((language) => (
                <span key={`lang-${language}`} className="badge">
                  {language}
                </span>
              ))}
            </div>
          </div>
          {weather && (
            <div className="grid-item">
              <div className="weather-info-container">
                <div className="weather-content">
                  <div>
                    <span className="weather-temp">{Math.round(weather.current.temp)}</span>
                    <span className="weather-temp-unit">°C</span>
                  </div>
                  <div>
                    <p>Feels like: {Math.round(weather.current.feels_like)}°C</p>
                    <p>Humidity: {weather.current.humidity}%</p>
                    <p>Wind speed: {Math.round(weather.current.wind_speed)} km/h</p>
                  </div>
                </div>
                <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`} alt={weather.current.weather[0].main} className="weather-icon" />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Details;
