import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import  frameOperations  from './duck/operations.js';


const mapStateToProps = state => ({
    bikeType: state.headerReducer,
    frameSize: state.headerReducer,
    receiveFrameJsonAction: state.headerReducer
});

const mapDispatchToProps = (dispatch) => {

    const chooseBikeType = (type) => {
        console.log("Frame Container - choose Bike Type");
        dispatch(frameOperations.bikeType(type))
    };
    const chooseFrameSize = () =>{
        console.log("Frame Container - choose Frame Size");
        dispatch(frameOperations.frameSize(1));
    };

    const fetchFrameJson = (frame) => {
        console.log('Frame Container - fetch frame');
        dispatch(frameOperations.fetchFrameJson(frame))
    };

    return {
        chooseBikeType,
        chooseFrameSize,
        fetchFrameJson
    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent);


export default HeaderContainer;