import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike:24.84,
        temp:26.5,
        temp_min:24.0,
        temp_max:28.0,
        humidity:60,
        pressure:1012,
        weather: "clear sky",

    });    
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign: "center",}}>
            
            <h2>Weather App by Ramniwash ! </h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox  info={weatherInfo}/>
        </div>
    );
}