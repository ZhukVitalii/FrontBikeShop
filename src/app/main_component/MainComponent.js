import HeaderContainer from '../header/HeaderContainer'
import React, {Component} from 'react';
import FrameContainer from "../frame/FrameContainer";

class  MainComponent extends React.Component {

    render() {
        return (
            <div>
                <div>
                <HeaderContainer/>
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
