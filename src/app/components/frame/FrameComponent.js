import shortid from 'shortid';
import React, {Component} from 'react';
class FrameComponent extends Component {

    componentDidMount(){
        if(this.props.frameData === undefined) {
            this.props.fetchFrameJson({
                'typeId': this.props.bikeType.typeId,
                'type': this.props.bikeType.type,
                'frameSize': this.props.frameSize,
                'wheelsDiamId': this.props.wheelsDiam.diamId,
                'manufacturerId' :this.props.manufacturerId
            });
        }
    };
    loadFork(){
        this.props.fetchForkJson({
            'bikeType': this.props.bikeType.type,
            'bikeTypeId': this.props.bikeType.typeId,
            'wheelsDiamId': this.props.wheelsDiam.diamId
        });
    }

    chooseFrame(frameId){
        this.props.setChosenFrameId(frameId);
        this.props.fetchForkJson({
            'bikeType': this.props.bikeType.type,
            'bikeTypeId': this.props.bikeType.typeId,
            'wheelsDiamId': this.props.wheelsDiam.diamId
        });
        this.props.setShowFork(true);
    }
    filterByManufacturer(manufacturerId){
        this.props.setFrameManufacturer(manufacturerId);
        this.props.fetchFrameJson({
            'typeId': this.props.bikeType.typeId,
            'type': this.props.bikeType.type,
            'frameSize': this.props.frameSize,
            'wheelsDiamId': this.props.wheelsDiam.diamId,
            'manufacturerId' :manufacturerId
        });
    }
    render() {

        return this.props.frameData !== undefined ?
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
                {this.props.frameData.map((frame) => (

                    <div className="details-left-slider" key={shortid.generate()}>
                        <img height="300" width="300" src={frame.way} alt="frame img"/>
                        <div className="details-left-info">
                             <div className="component-name">
                                <h3>{frame.name}</h3>
                             </div>

                            <h5> Артикул : {frame.article}</h5>
                                <p className="manufacturer"></p><h3> Виробник : {frame.manufacturerName} </h3>
                            <p>{frame.price}<label> грн</label></p>
                            <div className="size">
                            <div>Доступні розміри ::</div>
                                { frame.frameSizeTypes !== undefined ?
                                    frame.frameSizeTypes.map((sizeType) => (
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
                                            <b><i> {frame.bikeType}</i></b></font></p></th>
                                    </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                    <tr>
                                        <th><h5>Діаметр колес : </h5></th>
                                        <th><p align="center"><font size="4" color="#0080C0">
                                            <b><i> {frame.wheelsDiameter}</i></b></font></p></th>
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
                                <button onClick={() => this.chooseFrame(frame.frameId)}>Вибрати</button>
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
                    export default FrameComponent;
