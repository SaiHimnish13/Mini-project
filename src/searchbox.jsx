import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBox.css";
import { useState } from 'react';
export default function Search({wu})
{
    let [city,Update]=useState("");
    function cityName(event)
    {
        Update(event.target.value);
    }

    let url="https://api.openweathermap.org/data/2.5/weather";
    let api_id="214d970dd37b97873f2860b4eb3f41c3";
    async function weather()
    {
        let res= await fetch(`${url}?q=${city}&appid=${api_id}&units=metric`);
        let final= await res.json();
       let result={
            City: city,
             temp: final.main.temp,
            Temp_min: final.main.temp_min,
            Temp_max: final.main.temp_max,
            feels: final.main.feels_like,
            desc: final.weather[0].description
             };
         return result;
    };
   async function handleSubmit(event)
    {
        event.preventDefault();
        console.log(city);
        Update("");
        let info= await weather();
        wu(info);
    }
    return(
        <div className="SearchBox">
            <h3 style={{color:"white"}}>Search for weather</h3>
            <form>
            <TextField id="city" label="City Name" variant="outlined"required 
                value={city} onChange={cityName} style={{color:"white"}}/>
            <br />
            <br />
            <Button id="btn" variant="contained" type='submit' onClick={handleSubmit} endIcon={<SearchIcon /> 
            } >
            Search</Button>
            </form>
            <br />
            <br />
            <br />
            <div className='Card'>
            </div>
        </div>
    );
}