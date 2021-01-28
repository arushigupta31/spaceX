import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import Header from './Header';
import {RocketData} from '../App';

const RocketDetails = (props) => {
    const { isAuthenticated } = useAuth0();
    const data= props.location.state.item;
    console.log(Object.keys(data))


    return (
        isAuthenticated && (
        <div>
            {JSON.stringify(data)}
      </div>
        )
    )
}
export default RocketDetails;