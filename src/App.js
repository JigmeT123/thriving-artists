import React, { useState } from 'react';
import Header from './components/Header/Header';
import SideDrawer from './components/sideDrawer/SideDrawer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Backdrop from './components/Backdrop/Backdrop';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/footer/Footer';
import ArtistProfile from './components/artistProfile/ArtistProfile';

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
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/:artist_id" component={ArtistProfile} />
                </Switch>
<Footer />
            </div>
        </Router>

    );
}

export default App;
