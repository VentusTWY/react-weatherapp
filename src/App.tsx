import React, { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import Weather from './components/weather'
import './App.css'

export default function App() {
  const [lat, setLat] = useState<number>(0);
  const [long, setLong] = useState<number>(0);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      const apiUrl = `${import.meta.env.VITE_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(apiUrl);
      const result = await response.json();
      setData(result);
      console.log(result);
    };
    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      latitude: {lat} <br />
      longitude: {long}
      <div className="weather">
        {data !== null ? (
          <div>
            <h1>{data.name}</h1>
            <h3>{data.weather[0].main}</h3>
            <h3>{data.main.temp}°C</h3>
          </div>) : null}
      </div>
    </div>
  )
}


