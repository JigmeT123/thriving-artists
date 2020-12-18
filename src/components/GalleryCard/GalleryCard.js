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
import {Link} from 'react-router-dom';

const GalleryCard = ({images, description, artistName, id}) => {

    return (
        <Card className={styles.galleryCard}>
            <CardActionArea className={styles.imgholder}>
                <Link to={'/' + id}>
                    <CardMedia className={styles.galleryCardMedia} image={images}/>
                </Link>
               
            </CardActionArea>
            <CardContent className={styles.cardInfo}>
                    <p className={styles.artName}>MonaLisa</p>
                    <p className={styles.artName}>20$</p>
                
            </CardContent>

            <CardActions>
            <Link to={'/' + id}>
                <Button size="small" color="secondary">
                <p className={styles.artistName}>{artistName}</p>
                </Button>
            </Link>
            </CardActions>
        </Card>
    )
}

export default GalleryCard
