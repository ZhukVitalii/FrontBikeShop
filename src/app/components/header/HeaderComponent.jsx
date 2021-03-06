import React from 'react';

class HeaderComponent extends React.Component{
    render() {
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
                                        <li onClick={() => this.loadFrame({type:"MTB", typeId:1})}><p>MTB</p></li>
                                        <li onClick={() => this.loadFrame({type:"SHOSSE", typeId:2})}><p>ШОССЕ</p></li>
                                        <li onClick={() => this.loadFrame({type:"CITY", typeId:3})}><p>МІСЬКИЙ</p></li>
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
        </div>

        )
    }
    loadFrame(type){
        this.props.chooseBikeType(type);
        this.props.setShowFrameSizeComponent();
    }


}


export default HeaderComponent;
