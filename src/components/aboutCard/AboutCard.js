import styles from './about.module.css';
import {Card} from '@material-ui/core';

const AboutCard = ({description}) => {
    return (
        <Card className={styles.aboutCardContainer}>
           {description}
        </Card>
    )
}

export default AboutCard
