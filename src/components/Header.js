import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

const Header = () => {
    const { user , isAuthenticated } = useAuth0();
    return (
        <>
        {isAuthenticated &&(
        <div className="spaceHeader">
            <ul className="headerNames">
                <li className="headerList"><a href="dashboard">Dashboard</a></li>
                <li className="headerList"><a href="missions">Missions</a></li>
                <li className="headerList"><a href="launches">Launches</a></li>
            </ul>
        </div>
        )}
        </>
    )
}
export default Header;