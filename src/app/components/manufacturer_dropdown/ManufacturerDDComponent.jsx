import React from "react";

class ManufacturerDDComponent extends React.Component{
    render() {
        return (
            <div>
                <ul className="nav manufacturer">
                    <li className="dropdown3 "><a href="#0">Виробник</a>
                        <ul className="dropdown2">
                            <div>
                            { this.props.manufacturersData !== undefined ?
                                this.props.manufacturersData.map((manufacturer) => (
                                    <li key={manufacturer.id}><p>{manufacturer.name}</p></li>
                                    )
                                ) : null
                            }
                            </div>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
    loadFrame(type){
        this.props.chooseBikeType(type);
        this.props.setShowFrameSizeComponent();
    }


}


export default ManufacturerDDComponent;
