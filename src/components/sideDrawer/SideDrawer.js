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
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
            </ul>
        </nav>
    )
}

export default SideDrawer