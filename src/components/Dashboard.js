import React, { useContext, createContext } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from 'react-router-dom';
import {RocketData} from '../App';
import { ItemDataContext } from "../context/ItemDataContext";


const ItemData=createContext()
const Dashboard = () => {
    const { isAuthenticated } = useAuth0();
    const rdata=useContext(RocketData);
    const ItemDataFromContext = useContext(ItemDataContext);
    const history= useHistory();
    console.log(ItemDataFromContext)

    const handleClick=(item)=>{
        ItemDataFromContext.setItemList(item);
        history.push("/rocketDetails");
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
export {ItemData}