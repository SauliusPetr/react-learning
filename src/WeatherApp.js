//needs a statefor location
//button trigger will trigger the fetching of data from weather api

import { useState } from "react";

export function WeatherApp() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});

  async function handleWeatherRequest(location) {
    let response = await requesWeatherData(location);
    setWeatherData(response);
    //while thedata is loading make a spinner
    //then make a funiton that will display the data
  }

  return (
    <div>
      <div className="searchbar">
        <label htmlFor={"loaction"}>
          {"Location: "}
          <input
            id="loaction"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </label>
        <button type="submit" onClick={() => handleWeatherRequest(location)}>
          Submit
        </button>
      </div>
      <div></div>
    </div>
  );
}

async function requesWeatherData(location) {
  let apiKey = "c4332bbbf71b419ab07121955241403";
  let url = "https://api.weatherapi.com/v1/current.json";
  let fetchUrl = `${url}?key=${apiKey}&q=${location}`;
  try {
    let response = await fetch(fetchUrl, { mode: "cors" });
    let weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("Error: " + error);
  }
}
