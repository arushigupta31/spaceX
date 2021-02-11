import React, { useContext} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { ItemDataContext } from "../context/ItemDataContext";


const RocketDetails = () => {

    const { isAuthenticated } = useAuth0();
    const ItemDataFromContext = useContext(ItemDataContext);

    return (
        isAuthenticated && (
        <div>
            {JSON.stringify(ItemDataFromContext)}
      </div>
        )
    )
}
export default RocketDetails;