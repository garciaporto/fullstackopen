import axios from "axios";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_KEY;

const getWeather = (lat, lon, exclude = "alerts,daily,hourly,minutely") => {
  return axios
    .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&units=metric&appid=${API_KEY}`)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};

export default getWeather;
