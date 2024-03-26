import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    let INIT_URL="https://media.istockphoto.com/id/1020320044/photo/sky-clouds.jpg?s=612x612&w=0&k=20&c=2d_uMO0TMNqGD5yutrhQ-4XCswwTxeKNd9GLj7-YIQo=";
    const HOT_URL="https://media.istockphoto.com/id/1334455570/photo/thermometer-blue-sky-with-clouds-bright-sun-the-heat-hot-summer-day.jpg?s=1024x1024&w=is&k=20&c=j-EBME8OWyuLcppTjkUKKo7F3pJb5cK_tUwNIHAXrZU=";
    const COLD_URL="https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=1024x1024&w=is&k=20&c=A_D48BLCy76ux8guBDeYxk5c8i8WqWvQOcNVlFKOGk4=";
    const RAIN_URL="https://media.istockphoto.com/id/826645134/photo/dark-storm-clouds-clouds-with-background-dark-clouds-before-a-thunder-storm.jpg?s=612x612&w=0&k=20&c=Ji38WGtx9a6W-KpHgQB1SVGI3rGfvGG2yuQ8wZ4lDkc=";
    return(
    <div className="InfoBox">
    <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80
            ?<ThunderstormIcon/>
            :info.temp>15
            ?<WbSunnyIcon/>
            :<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>Temprature:{info.temp}&deg;C</div>&nbsp;
            <div>Humidity:{info.humidity}%</div>&nbsp;
            <div>Min Temp:{info.tempMin}&deg;C</div>&nbsp;
            <div>Max Temp:{info.tempMax}&deg;C</div>&nbsp;
            <div>The weather can be described as <b><i>{info.weather}</i></b> and feels like:{info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent> 
    </Card>
    </div>
    </div>
    );
}