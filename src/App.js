import React, { useState } from 'react';
import Header from './components/Header/Header';
import SideDrawer from './components/sideDrawer/SideDrawer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Backdrop from './components/Backdrop/Backdrop';

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
                    
                </Switch>

            </div>
        </Router>

    );
}

export default App;
