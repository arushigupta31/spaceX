import React, { useEffect, useState, useContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
// import Header from './Header';
// import history from './history';
import RocketDetails from './RocketDetails';
import { useHistory, withRouter ,Link , Redirect} from 'react-router-dom';
import {RocketData} from '../App';


const Dashboard = (props) => {
    const { user, isAuthenticated } = useAuth0();
    const history= useHistory();
    const rdata=useContext(RocketData);

    const handleClick=(item)=>{
        // console.log(item)
        history.push("/rocketDetails", {item});
        // <RocketDetails item={item}/>
    }
    return (
        isAuthenticated && (
        <div>
            <div>
                <div className="rocketDiv">
                    {rdata && rdata.map((item)=>(
                    <div className="rocketsCard" onClick={()=>handleClick(item)}>
                        <ul className="rocketBlock">
                            <li className="rocketDetails"><center><a><img src={item.flickr_images[0]}/></a></center></li>
                            <li className="rocketDetails" style={{fontAlign:"center"}}>{item.name}-{item.type}</li>{/*blue*/}
                            <li className="rocketDetails">{item.description}</li>
                        </ul>
                    </div>
                    ))} 
                </div>
            </div>
        </div>
        )
    )
}
export default Dashboard;