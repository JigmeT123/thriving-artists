import styles from './artistprofile.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Card, Button} from '@material-ui/core';

const ArtistProfile = (props) => {
    const [id, setId] = useState(null);
    const [artistProfile, setArtistProfile] = useState({});
    useEffect(() => {
        let id = props.match.params.artist_id;

        setId(id);
        axios
            .get("http://localhost:8000/artists/" + id)
            .then(response => {
                setArtistProfile(response.data);
            })

    }, [])
    console.log(artistProfile);
    return (
        <div className={styles.artistProfile}>
            <div className={styles.profileContainer}>
                <div className={styles.artImageOfArtist}>
                    <img
                        className={styles.profileArtPic}
                        src={artistProfile.artistPic}
                        alt={artistProfile.artDescription}/>
                </div>
                <div className={styles.artistInfo}>
                    <Card className={styles.artistInfoCard}>
                        <div className={styles.profileInfoHeader}>
                            <h1>{artistProfile.artName}</h1>
                            <div>
                                <h4>Art Description:</h4>
                                <p>{artistProfile.artDescription}</p>
                            </div>
                           
                        </div>
                        <div className={styles.profileInfoBottom}>
                            <p className={styles.infoName}><span>Artist:</span> {`${artistProfile.firstName} ${artistProfile.lastName}`}</p>
                            <Button className={styles.artistBtn}>{artistProfile.email}</Button>
                        </div>

                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ArtistProfile
