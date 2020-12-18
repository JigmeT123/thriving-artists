import styles from './about.module.css';
import {Card, Typography} from '@material-ui/core';

const AboutCard = ({description}) => {
    return (
        <Card className={styles.aboutCardContainer}>
           <Typography>{description}</Typography>
        </Card>
    )
}

export default AboutCard
