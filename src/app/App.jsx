import React, {Component} from 'react';
// import Contacts from './components/contacts';
// import Frame from "./components/frame/Frame";
import {BrowserRouter as Router} from "react-router-dom";
import HeaderContainer from './components/header/HeaderContainer'
import MainContainer from "./components/main_component/MainContainer";

class App extends Component {



    render() {
        return (
            <div>
                <MainContainer/>
                {/*<FrameContainer/>*/}
            </div>
        )
    }
}

export default App;
