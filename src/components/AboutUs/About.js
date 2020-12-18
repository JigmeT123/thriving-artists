import styles from './about.module.css';
import {Button} from '@material-ui/core';
import AboutCard from '../aboutCard/AboutCard';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.aboutContent}>
                <div className={styles.aboutContentTitle}>
                    <h1>Join Our Team</h1>
                    <p>Help us on our quest to support good artists</p>
                    <Link to="/profile"><Button className={styles.supportBtn}>Artist Profile</Button></Link> 
                </div>
                <div className={styles.aboutCardContainer1}>
                    <AboutCard className={styles.card1} description="Thriving Artists is a project designed to gather young, thriving artists and art enthusiasts from all over Azerbaijan in one platform. We place the artworks of the young artists to give them an opportunity to showcase their work, to help them gain recognition and earn money by being engaged in a field they love, art."/>
                    <AboutCard className={styles.card2} description="Considering the fact that the field of art is still under development in Azerbaijan, where artists do not get enough recognition for their creativity and are obliged to promote themselves, we decided to create this platform to gather the works of these artists in a single online gallery, so that they can showcase their works without being concerned about self-promotion."/>
                    <AboutCard className={styles.card3} description="This platform is designed as a combination of an art gallery and a shopping website. Art enthusiasts can view the art pieces, read about them in the gallery section, and get to know the artists better by visiting their profiles. Viewers who want to purchase works will have the contact information of the artist and will buy the item directly from the creator."/>
                    <AboutCard className={styles.card4} description="Thriving Artists is not only an exhibition platform for the art creators but also an online store for the art collectors, buyers, and gift-givers who enjoy receiving and/or giving a piece of art. The prices of the works are determined by the artists themselves, not by the creators of the platform. So at the end of the day, the buyer will not only receive well-priced, handmade artwork but also end up supporting the careers of local artists."/>
                </div>
                
            </div>
        </div>
    )
}

export default About
