import styles from './about.module.css';
import {Button} from '@material-ui/core';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutContentTitle}>
                    <h1>Join Our Team</h1>
                    <p>Help us on our quest to support good artists</p>
                    <Button className={styles.supportBtn}>Artist Profile</Button>
                </div>
            </div>

            <div className={styles.meetTeam}>
                    <h1>Meet our Team</h1>
                    <div className={styles.teamProfile}>
                        
                    </div>
            </div>
               
        </div>
    )
}

export default About
