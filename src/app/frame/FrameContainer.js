import { connect } from 'react-redux';
import FrameComponent from './FrameComponent';
import frameOperations  from './duck/operations';

const mapStateToProps = state => ({
    bikeType: state.frameReducer,
    frameSize: state.frameReducer,
    frameData: state.frameReducer
});

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