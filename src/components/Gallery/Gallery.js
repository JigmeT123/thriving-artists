import styles from './gallery.module.css';
import GalleryCard from '../GalleryCard/GalleryCard';

const Gallery = () => {
    return (
        <div className={styles.gallery}>
           <h1>This is the gallery sections</h1> 
           <div className={styles.galleryContent}>
            
           <GalleryCard images="https://images-na.ssl-images-amazon.com/images/I/71N9bGfQSfL._SX679_.jpg" description="This is a cool art by me. I don't know what else to write lol But i gotta write something" artistName='Jigme Tashi'/>
           <GalleryCard images="https://media.npr.org/assets/img/2012/02/02/mona-lisa-copy_custom-cf935c261c640b9ff7e214059a0328c880c22f50-s800-c85.jpg" description="This is a cool art by me. I don't know what else to write lol But i gotta write something" artistName='Jigme Tashi'/>
           <GalleryCard images="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" description="This is a cool art by me. I don't know what else to write lol But i gotta write something" artistName='Jigme Tashi'/>
           <GalleryCard images="https://cdn.britannica.com/83/190483-050-FE927054/Self-Portrait-canvas-Vincent-van-Gogh-National-Gallery-1889.jpg" description="This is a cool art by me. I don't know what else to write lol But i gotta write something" artistName='Jigme Tashi'/>
           </div>
           <div className={styles.galleryContent}>
            
           <GalleryCard images="https://images-na.ssl-images-amazon.com/images/I/71N9bGfQSfL._SX679_.jpg" description="This is a cool art by me. I don't know what else to write lol But i gotta write something" artistName='Jigme Tashi'/>
           <GalleryCard images="https://media.npr.org/assets/img/2012/02/02/mona-lisa-copy_custom-cf935c261c640b9ff7e214059a0328c880c22f50-s800-c85.jpg" description="This is a cool art by me. I don't know what else to write lol But i gotta write something" artistName='Jigme Tashi'/>
           <GalleryCard images="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/757px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" description="This is a cool art by me. I don't know what else to write lol But i gotta write something" artistName='Jigme Tashi'/>
           <GalleryCard images="https://cdn.britannica.com/83/190483-050-FE927054/Self-Portrait-canvas-Vincent-van-Gogh-National-Gallery-1889.jpg" description="This is a cool art by me. I don't know what else to write lol But i gotta write something" artistName='Jigme Tashi'/>
           </div>
        </div>
    )
}

export default Gallery
