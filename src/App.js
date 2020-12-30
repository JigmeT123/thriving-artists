import{ useState } from 'react';

// Components
import Header from './components/Header/Header';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/footer/Footer';
import ArtistProfile from './components/artistProfile/ArtistProfile';
import Contact from './components/ContactUs/Contact';
import Profile from './components/Profile/Profile';
import About from './components/AboutUs/About';
import People from './components/people/People';
//routes
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [toggle, setToggle] = useState(false)
    const drawerToggleHandler = () => {
        setToggle(true)
    }
    const backDropHandler = () => {
        setToggle(false)
    }
    let backdrop;

    if(toggle){
        
        backdrop = <Backdrop back={backDropHandler}/>
    }
    return (

        <Router>
            <div className="App">
                <Header drawerClick={drawerToggleHandler}/>
                <SideDrawer show={toggle} />
                {backdrop}
                <Switch>
                    <Route exact path="/" component={Gallery} />
                    <Route path="/contactUs" component={Contact} />
                    <Route exact path="/profile" component={Profile} />
                    <Route path="/profile/:profile_id" component={People} />
                    <Route path="/aboutUs" component={About} />
                    <Route path="/:artist_id" component={ArtistProfile} />
                </Switch>
<Footer />
            </div>
        </Router>

    );
}

export default App;
