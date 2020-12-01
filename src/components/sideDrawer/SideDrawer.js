import React from 'react'
import './side.css';
import {Link} from 'react-router-dom';
const SideDrawer = ({show}) => {
    let drawClasses = 'sideDrawer';
    if(show){
        drawClasses = 'sideDrawer open'
    }
    return (
        <nav className={drawClasses}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                    <Link to="/profile">Artist Profile</Link>
                </li>
                <li>
                    <Link to="/contactUs">Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideDrawer