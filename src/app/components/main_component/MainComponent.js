import HeaderContainer from '../header/HeaderContainer'
import React, {Component} from 'react';
import FrameContainer from "../frame/FrameContainer";
import FrameSizeComponent from "../frame_size/FrameSizeComponent";

class  MainComponent extends React.Component {

    render() {
        return (
            <div>
                <div>
                <HeaderContainer/>
                </div>
                <div>
                    <FrameSizeComponent/>
                </div>

                <div>
                    {this.props.showFrameComponent ?
                        <FrameContainer /> :
                        null
                    }
                </div>
            </div>


        )
    }
}

export default MainComponent;
