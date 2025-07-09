import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';
export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="***************************";
    let getWeatherInfo=async()=>{
      try{
        let response=await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse=await response.json();
      let result={
        city:city,
        feelsLike:jsonResponse.main.feels_like,
        temp:jsonResponse.main.temp,
        temp_min:jsonResponse.main.temp_min,
        temp_max:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        pressure:jsonResponse.main.pressure,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
      }catch(error){
        throw error;
      }
      
    };
    let handleChange = (event) => {
        setCity(event.target.value);
    } 
    let handleSubmit = async (event) => {
      try{
        event.preventDefault();
       console.log("City Name: ", city);
       setCity("");
       let newInfo=await getWeatherInfo();
       updateInfo(newInfo);
      }catch(error){
        setError(true);
      }
       
    };
    return(
    <div className='searchBox'>
        <form>
          <TextField 
            id="city" 
            label="City Name" 
            variant="outlined" 
            required 
            value={city}
            onChange={handleChange}

          />
          <br></br><br></br>
          <Button 
          variant="contained" 
          type="submit"
          onClick={handleSubmit}
          >Search</Button>  
          {error && <p style={{color:"red"}}>No such place exists!</p>}
        </form>
         
    </div>
    );
}
