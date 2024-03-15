import { useState } from "react";

let defaultCountry = await initWeather("Oslo");

export function WeatherApp() {
  const [location, setLocation] = useState("Sweden");
  const [weatherData, setWeatherData] = useState(defaultCountry);

  async function handleWeatherRequest(location) {
    let response = await requesWeatherData(location);
    if (Object.keys(response).length !== 0) {
      setWeatherData(pullData(response));
    }
  }

  return (
    <div className="weather-app-container">
      <div className="weather-container">
        <div>
          <h2>{weatherData.city}</h2>
          <h5>{weatherData.country}</h5>
        </div>
        <img src={weatherData.icon} />
        <div className="temperature">{weatherData.tempC + "°C"}</div>
      </div>
      <div className="searchbar">
        <label htmlFor={"loaction"}>
          <input
            id="loaction"
            placeholder="Oslo"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </label>
        <button type="submit" onClick={() => handleWeatherRequest(location)}>
          Submit
        </button>
      </div>
      <div>
        <div>{`Humidity: ${weatherData.humidity}%`}</div>
        <div>{`Windspeed: ${weatherData.windspeed} KPH`}</div>
        <div>{`Last Updated: ${weatherData.lastUpdated}`}</div>
      </div>
    </div>
  );
}

function loadingAnimation() {
  let container = document.querySelector("weather-app-container");
  container.setAttribute("style", "background-size:cover");
}

async function initWeather(location) {
  let response = await requesWeatherData(location);
  return pullData(response);
}

function pullData(weatherData) {
  return {
    country: weatherData.location.country,
    city: weatherData.location.name,
    tempF: weatherData.current.temp_f,
    tempC: weatherData.current.temp_c,
    humidity: weatherData.current.humidity,
    windspeed: weatherData.current.wind_kph,
    icon: weatherData.current.condition.icon,
    condition: weatherData.current.condition.text,
    lastUpdated: weatherData.current.last_updated,
  };
}

async function requesWeatherData(location) {
  let apiKey = "c4332bbbf71b419ab07121955241403";
  let url = "https://api.weatherapi.com/v1/current.json";
  let fetchUrl = `${url}?key=${apiKey}&q=${location}`;
  let weatherData = {};
  try {
    let response = await fetch(fetchUrl, { mode: "cors" }).catch((err) =>
      console.log("aaa")
    );
    if (!response.ok) {
      return {};
    }

    weatherData = await response.json();

    return weatherData;
  } catch (error) {
    console.log("Error: ", error);
  }
}
