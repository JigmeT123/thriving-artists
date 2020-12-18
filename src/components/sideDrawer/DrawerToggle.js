import React from 'react'
import styles from './draw.module.css';
import {Menu} from '@material-ui/icons'
const DrawerToggle = ({click}) => {
    return (
       <button className={styles.toggleBtn} onClick={click}>
           <Menu className={styles.menuBtn}/>
       </button>
    )
}

export default DrawerToggle