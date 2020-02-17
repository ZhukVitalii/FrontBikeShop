import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import FrameContainer from '../frame/FrameContainer';
import FrameComponent from "../frame/FrameComponent";

class HeaderComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showFrameComponent: false,
        };
        this.loadFrame = this.loadFrame.bind(this);
    }

    render() {
       // console.log("bikeType = " + this.state.bikeType);
        return (
        <div>
            <div className="banner-bg banner-sec">
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <a href="/"><img src="resources/images/logo.png"
                                             width="110"
                                             height="112"
                                             alt=""/>
                            </a>
                        </div>
                        <div className="top-nav">
                            <label className="mobile_menu" htmlFor="mobile_menu">
                                <span>Menu</span>
                            </label>
                            <ul className="nav">
                                <li className="dropdown1"><a href="#chooseBike">Зібрати велосипед</a>
                                    <ul className="dropdown2">
                                        <li onClick={() => this.loadFrame("MTB")}><a>MTB</a></li>
                                        <li onClick={() => this.loadFrame("SHOSSE")}><a>ШОССЕ</a></li>
                                        <li onClick={() => this.loadFrame("CITY")}><a>МІСЬКИЙ</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown1"><a href="#cate">КОМППОНЕНТИ</a>
                                    <ul className="dropdown2">
                                        <li><a href="/frames">Рами</a></li>
                                        <li><a href="/show_forks">Вилки</a></li>
                                        <li><a href="/show_brakesComponents">Гальма</a></li>
                                        <li><a href="/show_handlebarsComponents">Рульове управління</a></li>
                                        <li><a href="/show_wheelsComponent">Колеса та комплектуючі</a></li>
                                        <li><a href="/show_transmissionComponent">Трансмісія</a></li>
                                    </ul>
                                </li>
                                <a className="shop" href="/cart"><img src="resources/images/cart.png" alt=""/></a>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div>
                {this.state.showFrameComponent ?
                    <FrameComponent /> :
                    null
                }
            </div>
        </div>

        )
    }
    loadFrame(type){
        this.props.chooseBikeType(type);
        this.setState({
            showFrameComponent: true,
        });
    }


}


export default HeaderComponent;
