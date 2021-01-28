import './App.css';
import React , { useState,useEffect, createContext } from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './components/Dashboard';
import RocketDetails from './components/RocketDetails';
import Header from './components/Header';
import {routes, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Launches from './components/Launches';
import Missions from './components/Missions';

const RocketData = createContext();

function App() {
  const { isLoading } =useAuth0();
  const [rocket,  setRocket] = useState(null);
  
  useEffect(async ()=>{
    const url= "https://api.spacexdata.com/v4/rockets";
    const response = await fetch(url);
    const data = await response.json();
    // const item = data;
    console.log(data)
    setRocket(data);
  },[])  
  if (isLoading) return <div>...Loading</div>

   

  let routes = (
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/rocketDetails' component={RocketDetails} />
      <Route path='/launches' component={Launches}/>
      <Route path='/missions' component={Missions}/>
      <Route path='/dashboard' component={Dashboard}/>

    </Switch>
  )
  return (
    <>

      <LoginButton/>
      <LogoutButton/>
      <Header/>
      <RocketData.Provider value={rocket}>
        {routes}
      </RocketData.Provider>
     
    </>
  );
}

export default App;
export {RocketData} ;
