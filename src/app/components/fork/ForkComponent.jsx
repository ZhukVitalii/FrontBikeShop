import shortid from 'shortid';
import React, {Component} from 'react';
class ForkComponent extends Component {

    componentDidMount(){
        if(this.props.forkData === undefined) {
            this.props.fetchForkJson({
                'bikeType': this.props.bikeType.type,
                'bikeTypeId': this.props.bikeType.typeId,
                'wheelsDiamId': this.props.wheelsDiam.diamId
            });
        }
    };

    filterByManufacturer(manufacturerId){
        this.props.setForkManufacturer(manufacturerId);
        this.props.fetchForkJson({
            'bikeType': this.props.bikeType.type,
            'bikeTypeId': this.props.bikeType.typeId,
            'wheelsDiamId': this.props.wheelsDiam.diamId,
            'manufacturerId' :manufacturerId
        });
    }
    render() {

        return this.props.forkData !== undefined ?
            (

                <div>
                    <div>
                        <ul className="nav manufacturer">
                            <li className="dropdown3 "><a href="#0">Виробник</a>
                                <ul className="dropdown2">
                                    <li onClick={() => this.filterByManufacturer(null)}><p>всі виробники</p></li>
                                    <div>
                                        { this.props.manufacturersData !== undefined ?
                                            this.props.manufacturersData.map((manufacturer) => (
                                                    <li key={manufacturer.id} onClick={() => this.filterByManufacturer(manufacturer.id)}><p>{manufacturer.name}</p></li>
                                                )
                                            ) : null
                                        }
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {this.props.forkData.map((fork) => (

                        <div className="details-left-slider" key={shortid.generate()}>
                            <img height="300" width="300" src={fork.way} alt="frame img"/>
                            <div className="details-left-info">
                                <div className="component-name">
                                    <h3>{fork.name}</h3>
                                </div>

                                <h5> Артикул : {fork.article}</h5>
                                <p className="manufacturer"></p><h3> Виробник : {fork.manufacturerName} </h3>
                                <p>{fork.price}<label> грн</label></p>
                                <div className="size">
                                    <div>Доступні розміри ::</div>
                                    { fork.frameSizeTypes !== undefined ?
                                        fork.frameSizeTypes.map((sizeType) => (
                                                <div className="size-type" key={sizeType.id}>{sizeType.size}</div>
                                            )
                                        ) : null
                                    }
                                </div>


                                <div className="bike-type">

                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Тип : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.bikeType}</i></b></font></p></th>
                                        </tr>
                                        </thead>
                                    </table>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Діаметр колес : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.wheelsDiameter}</i></b></font></p></th>
                                        </tr>
                                        </thead>
                                    </table>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Матеріал : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.material} </i></b></font></p></th>
                                        </tr>
                                        </thead>
                                    </table>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Тип рульової : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.bracketWide} </i></b></font></p></th>
                                        </tr>
                                        </thead>
                                    </table>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Діаметр рульової : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.tubeDiameter} </i></b></font></p></th>
                                        </tr>
                                        </thead>
                                    </table>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Діаметр підстидільної труби : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.underSaddleTubeDiameter} </i></b></font></p></th>
                                        </tr>
                                        </thead>
                                    </table>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Кріплення гальм : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.brakesType} </i></b></font></p></th>
                                        </tr>
                                        </thead>
                                    </table>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Кріплення багажника : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.trunkBinding} </i></b></font></p></th>
                                        </tr>
                                        </thead>
                                    </table>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Вага : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.weight} </i></b></font></p></th>
                                        </tr>
                                        </thead>
                                    </table>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Колір : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.color} </i></b></font></p></th>
                                        </tr>
                                        </thead>

                                    </table>


                                    <h5>Опис ::</h5>
                                    <p className="desc">{fork.description}</p>
                                </div>
                                <div className="btn_form">
                                    <a href="cart.html">Вибрати</a>
                                    <a href="/cartAddFrame">Вибрати та додати до корзини</a>
                                </div>
                            </div>
                            <div className="clearfix"></div>

                        </div>
                    ))}
                </div>
            ) : null
    };
}
export default ForkComponent;
