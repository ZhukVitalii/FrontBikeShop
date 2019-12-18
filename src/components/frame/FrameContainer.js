import { connect } from 'react-redux';
import FrameComponent from './FrameComponent';
import { frameOperations } from './reducers/frame';

const mapStateToProps = state => {
    const { bikeType, frameSize, frameData } = state.home;

    return {
        bikeType,
        frameSize,
        frameData
    }
};

const mapDispatchToProps = (dispatch) => {

    const chooseBikeType = () => {
        console.log("Frame Container - choose Bike Type");
        dispatch(frameOperations.bikeType(1))
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

const FrameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FrameComponent);


export default FrameContainer;