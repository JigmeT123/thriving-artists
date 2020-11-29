import {useState, useEffect} from 'react'
import styles from './header.module.css';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';

import ToggleBtn from '../sideDrawer/DrawerToggle';
const Header = ({drawerClick}) => {
    const [handleShow, setHandleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                setHandleShow(true)
            } else {
                setHandleShow(false)
            }
        })
        return() => {
            window.removeEventListener('scroll');
        };
    }, [])
    return (
        <div className={`${styles.header} ${handleShow && styles.header__scrolled}`}>
            <div className={styles.extra}>
                <ToggleBtn click={drawerClick}/>
            </div>

            <nav className={styles.header__navigation}>

                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/gallery">
                        <li>Artist Profile</li>
                    </Link>
                    <Link to="/">
                        <div className={styles.header__logoContainer}>
                            <img className={styles.header__logo} src={logo} alt="CompanyLogo"/>
                        </div>
                       
                    </Link>
                    <Link to="/aboutUs">
                        <li>About Us</li>
                    </Link>
                   
                    <Link to="/contactUs">
                        <li>Contact Us</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header