import React, {Component} from 'react';

class WheelsSizeComponent extends Component {

    render() {
        return (
            <div>
                <table className="table table-sm table-dark">
                    <thead>
                    <tr>
                        <th scope="col">Колесо,дюйм</th>
                        <th scope="col">Обід, мм</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">20"</th>
                        <td>406</td>
                        <td>
                            <button type="button"
                                    className="btn btn-dark"
                                    onClick={() => this.loadFrame({'size':'20', 'sizeId':6})}>Вибрати</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">24"</th>
                        <td>507</td>
                        <td>
                            <button type="button"
                                    className="btn btn-dark"
                                    onClick={() => this.loadFrame({'size':'24', 'sizeId':1})}>Вибрати</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">26"</th>
                        <td>559</td>
                        <td>
                            <button type="button"
                                    className="btn btn-dark"
                                    onClick={() => this.loadFrame({'size':'26', 'sizeId':2})}>Вибрати</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">27.5"</th>
                        <td>584</td>
                        <td>
                            <button type="button"
                                    className="btn btn-dark"
                                    onClick={() => this.loadFrame({'size':'27.5', 'sizeId':3})}>Вибрати</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">28"(700c)</th>
                        <td>622</td>
                        <td>
                            <button type="button"
                                    className="btn btn-dark"
                                    onClick={() => this.loadFrame({'size':'28', 'sizeId':4})}>Вибрати</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">29"</th>
                        <td>622</td>
                        <td>
                            <button type="button"
                                    className="btn btn-dark"
                                    onClick={() => this.loadFrame({'size':'29', 'sizeId':5})}>Вибрати</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    loadFrame(size){
        this.props.chooseWheelSize({
            "bikeTypeId" : this.props.bikeType.typeId,
            "bikeType" : this.props.bikeType.type,
            "frameSize" : this.props.frameSize,
            "wheelsSize" : size.size,
            "wheelsSizeId" : size.sizeId

        });
        this.props.setShowFrameComponent();
    }
}

export default WheelsSizeComponent
