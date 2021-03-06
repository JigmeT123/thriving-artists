import styles from './profile.module.css';
import {Card, CardActionArea, CardMedia, CardContent, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const ProfileCard = ({name, profilePic, profileDescription, insta, id}) => {
    return (
        <Card className={styles.profileCard}>
            <CardActionArea className={styles.profileActionArea}>
                <Link to={'/profile/' + id}>
                    <CardMedia className={styles.galleryCardMedia} image={profilePic}/>
                </Link>
            </CardActionArea>

            <div className={styles.profileCardActions}>
                <h4>{name}</h4>
                <CardContent className={styles.profileContent}>
                    <p className={styles.artistName}>{profileDescription}</p>
                    <p className={styles.artistName}>{`Insta UserName: ` + insta}</p>
                </CardContent>
                <Link to={'/profile/' + id}>
                    <Button className={styles.btnProfile} size="small" color="primary">
                        Learn More
                    </Button>
                </Link>
            </div>
        </Card>
    )
}

export default ProfileCard
