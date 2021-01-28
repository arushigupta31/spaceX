import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Launches = (props) => {
    const { isAuthenticated } = useAuth0();
    const [launches, setLaunches]= useState(null)

    useEffect(async()=>{
    const url= "https://api.spacexdata.com/v4/launches";
    const launchRes =await fetch(url);
    const launchData = await launchRes.json();
    console.log(launchData)
    launchData.map((item)=>{
        console.log(item.name)
    })
    setLaunches(launchData);
    },[])
    return (
        isAuthenticated && (
        <div > 
            {launches && launches.map((item)=>{
               return(
                <div style={{border:"4px solid black", width:"50%", height:"4vh", display:"inline-flex"}}>{item.name}</div>
            )})} 
        </div>
        )
    )
}
export default Launches;