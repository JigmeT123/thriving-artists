import styles from './people.module.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Avatar} from '@material-ui/core';
import {Card, Button} from '@material-ui/core';
import {AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp} from 'react-icons/ai';

const People = (props) => {
    const [id, setId] = useState(null);
    const [artistProfile, setArtistProfile] = useState({});

    useEffect(() => {
        let id = props.match.params.profile_id;
        setId(id);
        axios
            .get("http://localhost:8000/artists/" + id)
            .then(response => {
                setArtistProfile(response.data);
            })
        console.log(artistProfile);
    }, []);

    return (
        <div className={styles.people}>

            <div className={styles.coverPeople}>
                <div className={styles.coverPic}></div>
                <Avatar
                    className={styles.avatarName}
                    alt="Remy Sharp"
                    src={artistProfile.artistPic}/>
                <div className={styles.peopleDescription}>
                    <p className={styles.artistName}>{`${artistProfile.firstName} ${artistProfile.lastName}`}</p>
                    <p>{"Baku, Azerbaijan"}</p>
                    <p>{19 + " Years Old"}</p>
                </div>

            </div>
            <div className={styles.peopleContainer}>
                <Card className={styles.peopleWork}>
                    <div className={styles.peopleDesc}>
                        <h1>Artist Details:</h1>
                        <p>{artistProfile.artDescription}</p>
                        <div className={styles.btnContainer}>
                            <Button className={styles.btnPeople}><AiFillFacebook className={styles.blue}/></Button>
                            <Button className={styles.btnPeople}><AiFillInstagram className={styles.red}/></Button>
                            <Button className={styles.btnPeople}><AiOutlineWhatsApp className={styles.green}/></Button>
                        </div>
                    </div>

                </Card>
            </div>

        </div>
    )
}

export default People
