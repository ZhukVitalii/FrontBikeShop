import shortid from 'shortid';
import React, {Component} from 'react';

class FrameComponent extends Component {

    // componentWillMount() {
    //     console.log("start request");
    //     this.props.fetchFrameJson(this.props.bikeType);
    //     console.log("finish request");
    // }

    render() {
        return (
            <div>
                {this.props.frameData.map((frame) => (

                    <div className="details-left-slider" key={shortid.generate()}>
                        <img height="300" width="300" src={frame.way} alt="frame img"/>
                        <div className="details-left-info">
                            <div className="link-to-one">
                                <a>
                                    <h3>{frame.name}</h3>
                                </a>
                            </div>
                            <h5> Артикул : {frame.article}</h5>
                                <p className="manufacturer"></p><h3> Виробник : {frame.manufacturerName} </h3>
                            <h4></h4>
                            <p>{frame.price}<label> грн</label></p>
                            <p className="size">Доступні розміри ::</p>
                            <a className="length" href="#">XS</a>
                            <a className="length" href="#">M</a>
                            <a className="length" href="#">S</a>
                            <div className="bike-type">

                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Тип : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.bikeType}</i></b></font></p></th>
                                    </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Діаметр колес : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.wheelsDiam}</i></b></font></p></th>
                                    </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Матеріал : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.material} </i></b></font></p></th>
                                    </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Тип рульової : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.bracketWide} </i></b></font></p></th>
                                    </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Діаметр рульової : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.tubeDiameter} </i></b></font></p></th>
                                    </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Діаметр підстидільної труби : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.underSaddleTubeDiameter} </i></b></font></p></th>
                                    </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Кріплення гальм : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.brakesType} </i></b></font></p></th>
                                    </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Кріплення багажника : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.trunkBinding} </i></b></font></p></th>
                                    </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Вага : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.weight} </i></b></font></p></th>
                                    </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Колір : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.color} </i></b></font></p></th>
                                    </tr>
                                    </thead>

                                </table>


                                <h5>Опис ::</h5>
                                <p className="desc">{frame.description}</p>
                            </div>
                            <div className="btn_form">
                                <a href="cart.html">Купити</a>
                                <a href="/cartAddFrame/${frame.article}">Додати до корзини</a>
                            </div>
                        </div>
                        <div className="clearfix"></div>

                    </div>
                    ))}
                    </div>
                    )
                    };
                    }
                    export default FrameComponent;
