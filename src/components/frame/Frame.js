import React from "react";

function updateState(bikeTypeId){
    this.setState({bikeTypeId:bikeTypeId})
}
class Frames extends React.Component {

    state = {
        frames: [],
        bikeTypeId: 0,
        bikeType: '',
    };

    render() {
        return (
            <div>
                <center><h1>Frame List</h1></center>
                {this.state.frames.map((frame) => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{frame.frameId}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{frame.bikeType}</h6>
                        </div>
                    </div>
                ))}
            </div>
        )
    };

    componentDidMount(){
        this.frames =  fetch('http://localhost:8080/get-frames', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'bikeTypeId': '1',
                'bikeType': 'MTB',
                'frameSizeId': '1',
                'itemsPerPage': '5',
                'page':'0'
            }),
        }).then(res => res.json())
            .then((data) => {
                this.setState({ frames: data })
            })
    }

}




export default Frames