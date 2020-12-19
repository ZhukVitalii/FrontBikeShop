import HeaderContainer from '../header/HeaderContainer'
import React from 'react';
import FrameContainer from "../frame/FrameContainer";
import FrameSizeContainer from "../frame_size/FrameSizeContainer";
import WheelsSizeContainer from "../wheels_size/WheelsSizeContainer";
import ForkContainer from "../fork/ForkContainer";
// import ClearCache from "react-clear-cache";
class  MainComponent extends React.Component {

    componentDidMount() {
        this.props.fetchManufacturersJson();
    }
    render() {
        return (
            <div>
                <div>
                <HeaderContainer/>
                </div>
                <div>
                    {this.props.showFrameSizeComponent === "true" ?
                    <FrameSizeContainer/> :
                        null
                    }
                </div>
                <div>
                    {this.props.showWheelsSizeComponent === "true" ?
                        <WheelsSizeContainer /> :
                        null
                    }
                </div>
                <div>
                    {this.props.showFrameComponent === "true" ?
                        <FrameContainer /> :
                        null
                    }
                </div>
                <div>
                    {this.props.showForkComponent === "true" ?
                        <ForkContainer /> :
                        null
                    }
                </div>
            </div>


        )
    }
}

export default MainComponent;
