import frameSizeOperations from "./operations";
import {connect} from "react-redux";
import FrameSizeComponent from "./FrameSizeComponent";

const mapStateToProps = state => ({
    bikeType: state.bikeType,
    frameSize: state.frameSize,
    frameData: state.frameData,
    showFrameComponent: state.showFrameComponent
});

const mapDispatchToProps = (dispatch) => {

    const chooseFrameSize = (size) =>{
        dispatch(frameSizeOperations.frameSize(size.frameSize));
        dispatch(frameSizeOperations.fetchFrameJson({
            'bikeType': size.bikeType,
            'frameSizeId': size.frameSize,
        }));
    };

    const fetchFrameJson = (frame) => {
        dispatch(frameSizeOperations.fetchFrameJson(frame))
    };

    const setShowFrameComponent = () => {
        dispatch(frameSizeOperations.showFrameComponent(true))
    };

    return {
        chooseFrameSize: chooseFrameSize,
        fetchFrameJson,
        setShowFrameComponent: setShowFrameComponent
    }
};

const FrameSizeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FrameSizeComponent);


export default FrameSizeContainer;