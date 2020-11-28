import styles from './gallery.module.css';
import {
    Card,
    CardActions,
    Button,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
} from '@material-ui/core';
// import {Link} from 'react-router-dom';

const GalleryCard = ({images, description, artistName}) => {
    return (
        <Card className={styles.galleryCard}>
            <CardActionArea>
                <CardMedia className={styles.galleryCardMedia} image={images}/>
            </CardActionArea>
            <CardContent>
                <Typography>{description}</Typography>
                <p className={styles.artistName}>{artistName}</p>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default GalleryCard