import {Link} from 'react-router-dom';
import {  useEffect, useState } from "react";
export default function Search() {
  const [shows, setShows] = useState([]);
  const [cityName, setCityName] = useState('');

  const handleSearch = () => {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d3f499c8790f11bf9d775f4c2b0e9667&units=metric`)
      .then(response => response.json())
      .then(data => {
        setShows(data);
        console.log(data);
      })
      .catch(error => console.error(error));
  };

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clouds":
        return "/images/clouds.png";
      case "Clear":
        return "/images/clear.png";
      case "Rain":
        return "/images/rain.png";
      case "Drizzle":
        return "/images/drizzle.png";
      case "Mist":
        return "/images/mist.png";
      default:
        return "/images/snow.png"; 
    }
  };

  return (
    <div className="card">
    
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          spellCheck="false"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleSearch}>
          <img src="/images/search.png" alt="search" />
        </button>
      </div>
      {shows && shows.weather && (
        <div className="weather">
          <img
            src={getWeatherIcon(shows.weather[0].main)}
            className="weather-icon"
            alt="weather icon"
          />
       
          <h1 className="temp">{shows.main.temp}°C</h1>
          <p className="city">
            {shows.name}
          </p>
          
          <div className="details">
          <div className="col">
            <img src="/images/humidity.png" alt="humidity" />
          </div>
          <div>
            <p className="humidity">{shows.main.humidity}%</p>
            <p>humidity</p>
          </div>
          <div className="col">
            <img src="/images/wind.png" alt="wind" />
          </div>
          <div>
            <p className="wind">{shows.wind.speed} km/h</p>
            <p>wind</p>
          </div>
     
       
        </div>
        </div>
        
      )}
    </div>
  );
}