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
    chooseFork(forkId){
        this.props.setChosenFrameId(forkId);
        this.props.fetchForkJson({
            'bikeType': this.props.bikeType.type,
            'bikeTypeId': this.props.bikeType.typeId,
            'wheelsDiamId': this.props.wheelsDiam.diamId
        });
        this.props.setShowFork(true);
    }
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
                            <img height="300" width="300" src={fork.way} alt="forl img"/>
                            <div className="details-left-info">
                                <div className="component-name">
                                    <h3>{fork.name}</h3>
                                </div>

                                <h5> Артикул : {fork.article}</h5>
                                <p className="manufacturer"></p><h3> Виробник : {fork.manufacturerName} </h3>
                                <p>{fork.price}<label> грн</label></p>
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
                                        <tr>
                                            <th><h5>Діаметр штока  :   </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0" >
                                                <b><i>  {fork.tubeDiameter}</i></b></font></p></th>
                                        </tr>
                                    </table>
                                    <table>
                                        <tr>
                                            <th><h5>Довжина штока  :   </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0" >
                                                <b><i> {fork.stTubeLength}</i></b></font></p></th>
                                        </tr>
                                    </table>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th><h5>Кріплення гальм : </h5></th>
                                            <th><p align="center"><font size="4" color="#0080C0">
                                                <b><i> {fork.brakeTypes} </i></b></font></p></th>
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
                                <button onClick={() => this.chooseFork(fork.forkId)}>Вибрати</button>
                                {/*<button>Вибрати та додати до корзини</button>*/}
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
