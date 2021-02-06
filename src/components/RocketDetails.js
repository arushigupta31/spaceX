import React, { useEffect, useState , useContext} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ItemData } from './Dashboard';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import Header from './Header';
import {RocketData} from '../App';

const RocketDetails = (props) => {
    const { isAuthenticated } = useAuth0();
    console.log(ItemData)
    const idata= useContext(ItemData)
    console.log(ItemData)
    const data= props.location.state.item;
    console.log(idata);

    return (
        isAuthenticated && (
        <div>
            {JSON.stringify(data)}
      </div>
        )
    )
}
export default RocketDetails;