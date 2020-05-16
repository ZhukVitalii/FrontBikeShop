import HeaderContainer from '../header/HeaderContainer'
import React from 'react';
import FrameContainer from "../frame/FrameContainer";
import FrameSizeContainer from "../frame_size/FrameSizeContainer";
import WheelsSizeContainer from "../wheels_size/WheelsSizeContainer";
import ForkContainer from "../fork/ForkContainer";
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
                    {this.props.showFrameSizeComponent ?
                    <FrameSizeContainer/> :
                        null
                    }
                </div>
                <div>
                    {this.props.showWheelsSizeComponent ?
                        <WheelsSizeContainer /> :
                        null
                    }
                </div>
                <div>
                    {this.props.showFrameComponent ?
                        <FrameContainer /> :
                        null
                    }
                </div>
                <div>
                    {this.props.showForkComponent ?
                        <ForkContainer /> :
                        null
                    }
                </div>
            </div>


        )
    }
}

export default MainComponent;
