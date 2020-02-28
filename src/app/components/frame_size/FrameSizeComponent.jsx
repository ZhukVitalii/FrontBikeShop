import React, {Component} from 'react';

class FrameSizeComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.chooseSize = this.chooseSize(msg).bind(this);
    // }

    chooseSize(msg) {
        alert(msg);
    }
    render() {
        return (
            <div>
                <table className="table table-sm table-dark">
                    <thead>
                    <tr>
                        <th scope="col">Розмір рами,дюйм</th>
                        <th scope="col">Зріст, см</th>
                        <th scope="col">Розмір рами, см</th>
                        <th scope="col">Розмір рами</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">13"-14.5"</th>
                        <td>145 - 155</td>
                        <td>33-36</td>
                        <td>XS (XSmall)</td>
                        <td><button type="button" className="btn btn-dark">Вибрати</button></td>
                    </tr>
                    <tr>
                        <th scope="row">15"-16"</th>
                        <td>158 - 172</td>
                        <td>38-40</td>
                        <td>S (Small)</td>
                        <td>
                            <button type="button" className="btn btn-dark">Вибрати</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">17"-18"</th>
                        <td>168 - 182</td>
                        <td>43-47</td>
                        <td>M (Meduim)</td>
                        <td>
                            <button type="button" className="btn btn-dark">Вибрати</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">19"-20"</th>
                        <td>178 - 190</td>
                        <td>48-52</td>
                        <td>L (Large)</td>
                        <td>
                            <button type="button" className="btn btn-dark">Вибрати</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">21"-22"</th>
                        <td>188 - 200</td>
                        <td>55-58</td>
                        <td>XL (XLarge)</td>
                        <td>
                            <button type="button" className="btn btn-dark">Вибрати</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">23"-24"</th>
                        <td>200 - 210</td>
                        <td>59-62</td>
                        <td>XXL (XLarge)</td>
                        <td>
                            <button type="button"
                                    className="btn btn-dark"
                                    onClick={() => this.loadFrame('XXL')}>Вибрати</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    loadFrame(size){
        this.props.chooseFrameSize({
            "bikeType" : this.props.bikeType,
            "frameSize" : size

        });
        this.props.setShowFrameComponent();
    }
}

export default FrameSizeComponent
