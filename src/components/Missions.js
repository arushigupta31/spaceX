import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

const Missions = (props) => {
    const { isAuthenticated } = useAuth0();
    const [history, setHistory]= useState(null)

    useEffect(async()=>{
    const url= "https://api.spacexdata.com/v4/history";
    const historyRes =await fetch(url);
    const historyData = await historyRes.json();
    console.log(historyData)
    historyData.map((item)=>{
        console.log(item.title)
    })
    setHistory(historyData);
    },[])
    return (
        isAuthenticated && (
        <div> 
            {history && history.map((item)=>{
               return(
                <div style={{border:"4px solid white", width:"50%", height:"4vh", display:"inline-flex"}}>{item.title}</div>
            )})} 
        </div>
        )
    )
}
export default Missions;