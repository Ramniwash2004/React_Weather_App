import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';
export default function InfoBox({info}){
    const INIT_URL="https://unsplash.com/photos/a-foggy-field-with-trees-in-the-distance-QYjDhzIeMm4";

    const HOT_URL="./src/assets/hot weather.webp";
    const COLD_URL="./src/assets/cold weather.webp";
    const RAIN_URL="./src/assets/rain weather.webp";
    return(
    <div className="infobox">
        <div className="cardContainer">
           <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={
                    info.humidity>80
                    ? RAIN_URL
                    :info.temp >20
                    ? HOT_URL
                    : COLD_URL
                }
                title="green iguana"
            />
            <CardContent>
                <Typography style={{textAlign: "center"}} gutterBottom variant="h5" component="div">
                  {info.city }{
                    info.humidity>80
                    ? <ThunderstormIcon  style={{marginLeft:"1rem"}} />
                    :info.temp >15
                    ? <SunnyIcon style={{marginLeft:"1rem"}}/>
                    : <AcUnitIcon style={{marginLeft:"1rem"}}/>
                }
                </Typography>
                <Typography variant="body2"  color= "text.secondary" component={"span"}>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}%</p> 
                    <p>Min Temperature: {info.temp_min}&deg;C</p>
                    <p>Max Temperature: {info.temp_max}&deg;C</p>
                    <p>Pressure: {info.pressure} hPa</p>
                    <p>The weather can be described as <i>{info.weather}</i> and feels 
                    like {info.feelsLike}&deg;C
                    </p>
                </Typography>
            </CardContent>
        </Card> 
        </div>
        
    </div>
    );
}