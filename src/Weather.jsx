import Search from "./searchbox.jsx";
import CardBox from "./Card.jsx";
import { useState } from "react";

export default function Weather()
{
    let [weatherInfo,updateInfo]=useState({
        City:"Delhi",
        temp:25,
        Temp_min:25,
        Temp_max:25,
        feels:23,
        desc:"haze"
    });
    function Update(result)
    {
        updateInfo(result);
    }
    return(
        <div>
            <h1 style={{textAlign:"center",color:"white"}}>Weather App</h1>
            <Search wu={Update}/>
            <CardBox object={weatherInfo}/>
        </div>
    );
}