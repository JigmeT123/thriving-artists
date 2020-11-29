import styles from './gallery.module.css';
import GalleryCard from '../GalleryCard/GalleryCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
    const [artists, setArtists] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/artists").then(response => {
            setArtists(response.data);
        })
    }, [])
    return (
        <div className={styles.gallery}>
           <h1>This is the gallery sections</h1> 
           <div className={styles.galleryContent}>
               {
                   artists && artists.map(artist => (
                       <GalleryCard key={artist.id} images={artist.artistPic} description={artist.artDescription} artistName={`${artist.firstName} ${artist.lastName}`}/>
                   ))
               }
           </div>
        </div>
    )
}

export default Gallery
