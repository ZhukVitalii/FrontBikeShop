import { connect } from 'react-redux';
import FrameComponent from './FrameComponent';
import frameOperations  from './duck/operations';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({
    bikeType: state.bikeType,
    frameSize: state.frameSize,
    frameData: state.frameData
});

const mapDispatchToProps = (dispatch) => {

    const chooseBikeType = (type) => {
        //console.log("Frame Container - choose Bike Type");
        //dispatch(frameOperations.bikeType(type));
        console.log('Frame Container - fetch frame');
        dispatch(frameOperations.fetchFrameJson(type));
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
