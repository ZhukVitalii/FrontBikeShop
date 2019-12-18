import React from 'react';
import shortid from 'shortid';
function FrameComponent({
                           frameData,
                            chooseBikeType,
                            chooseFrameSize,
                            fetchFrameJson
                       }) {
    return (
        <div>
            <center><h1>Frame List</h1></center>
            {frameData.map((frame) => (
                <div key={shortid.generate()}
                     className="card">
                    <div className="card-body">
                        <h5 className="card-title">{frame.frameId}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{frame.bikeType}</h6>
                    </div>
                </div>
            ))}
        </div>
    )

}



export default FrameComponent;