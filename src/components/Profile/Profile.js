import styles from './profile.module.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';

const Profile = () => {
    const [artists, setArtists] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/artists").then(response => {
            setArtists(response.data);
          
        })
    },[])
    
    return (
        <div className={styles.profile}>
            <h1>List Of Artist</h1>
            {artists && artists.map(artist => (
                 <ProfileCard key={artist.id} id={artist.id} name={`${artist.firstName} ${artist.lastName}`} profilePic={artist.artistPic} profileDescription={artist.artDescription} insta={artist.instaAccount}/>
            )) }
           
        </div>
    )
}

export default Profile
