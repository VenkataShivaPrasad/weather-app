"use client"

import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "./components/Weather";
import WeatherData from "./types";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  const warning = () => toast.warn("Enter a valid city name", {
    position: "top-right",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    })

  const [city,SetCity] = useState("");
  const [weather,SetWeather] = useState<WeatherData | null>(null);

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

  const fetchWeather =async (e:FormEvent) => {
    e.preventDefault();
    try{
      await axios.get(url).then((res)=>{
        SetWeather(res.data);
        // console.log(res.data);  
      })
      SetCity("");

    }catch(e){
      warning();
      SetCity("");
    }
  }
  
  useEffect(()=>{},[weather])
  
  return (
    <main>
      
      <ToastContainer/>
      <form onSubmit={fetchWeather} className="flex gap-4 items-center justify-center m-5 p-2">
       
      <input
       placeholder="search a city.."
       className="w-[400px] h-[50px] border border-gray-600 rounded-lg p-3"
       onChange={(e)=>SetCity(e.target.value)}
       value={city}
       />
      
      <button onClick={fetchWeather}>
        <BsSearch size={22}/>
      </button>
      </form>

      {!weather ? (
        <></>
      ):
        <Weather main={weather.main} name={weather.name} weather={weather.weather} wind={weather.wind}/>
      }

    </main>
  );
}
