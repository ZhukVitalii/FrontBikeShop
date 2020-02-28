import HeaderContainer from '../header/HeaderContainer'
import React, {Component} from 'react';
import FrameContainer from "../frame/FrameContainer";
import FrameSizeContainer from "../frame_size/FrameSizeContainer";

class  MainComponent extends React.Component {

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
                    {this.props.showFrameSizeComponent ?
                        <FrameContainer /> :
                        null
                    }
                </div>
            </div>


        )
    }
}

export default MainComponent;
