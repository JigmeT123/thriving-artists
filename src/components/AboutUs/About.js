import styles from './about.module.css';
import {Button} from '@material-ui/core';
import AboutCard from '../aboutCard/AboutCard';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutContentTitle}>
                    <h1>Join Our Team</h1>
                    <p>Help us on our quest to support good artists</p>
                    <Button className={styles.supportBtn}>Artist Profile</Button>
                </div>
                <div className={styles.aboutCardContainer1}>
                    <AboutCard className={styles.card1} description=""/>
                    <AboutCard className={styles.card2} description=""/>
                    <AboutCard className={styles.card3} description=""/>
                    <AboutCard className={styles.card4} description=""/>
                </div>
                
            </div>
        </div>
    )
}

export default About
