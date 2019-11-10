import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import Frame from "./components/frame/Frame";


// var bikeType = undefined;
// function setBykeType(bikeType) {
//     if (bikeType !== undefined){
//         this.setState({bikeTypeId:bikeType})
//     }
// }


const routing = (


    <Router>
        <div>
            <hr />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/frames" component={Frame} />
            </Switch>
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById("root"));






//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
