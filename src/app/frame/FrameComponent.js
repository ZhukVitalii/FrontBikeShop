import shortid from 'shortid';
import HeaderComponent from '../header/HeaderComponent';
import React, {Component, Fragment} from 'react';

class FrameComponent extends Component {

    componentWillMount() {
        console.log("start request");
        this.props.fetchFrameJson("MTB");
        // this.frameData =  fetch('http://localhost:8080/get-frames', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         'bikeTypeId': '1',
        //         'bikeType': 'MTB',
        //         'frameSizeId': '1',
        //         'itemsPerPage': '5',
        //         'page':'0'
        //     }),
        // }).then(res => res.json())
        //     .then((data) => {
        //         this.setState({ frameData: data })
        //     });
        console.log("finish request");
    }

    render() {
        console.log("bikeType = " + this.props.bikeType);
        return (
            <div>

                <h1>Frame List</h1>

                <div className="card-body">
                    <h5 className="card-title">{this.props.bikeType}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.frameSize}</h6>
                </div>


            </div>
        )
    };


}


export default FrameComponent;