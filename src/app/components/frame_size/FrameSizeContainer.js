import frameSizeOperations from "./operations";
import {connect} from "react-redux";
import FrameSizeComponent from "./FrameSizeComponent";

const mapStateToProps = state => ({
    bikeType: state.headerReducer.bikeType,
    showWheelsSizeComponent: state.showWheelsSizeComponent
});

const mapDispatchToProps = (dispatch) => {

    const chooseFrameSize = (size) =>{
        sessionStorage.setItem("frameSize", size.frameSize);
        dispatch(frameSizeOperations.frameSize(size.frameSize));
        dispatch(frameSizeOperations.fetchFrameJson({
            'bikeType': size.bikeType,
            'bikeTypeId': size.bikeTypeId,
            'frameSizeId': size.frameSizeId,
            'frameSize': size.frameSize,
        }));
    };

    const fetchFrameJson = (frame) => {
        dispatch(frameSizeOperations.fetchFrameJson(frame))
    };

    const setShowWheelsSizeComponent = () => {
        sessionStorage.setItem("showWheelsSizeComponent", true);
        dispatch(frameSizeOperations.showWheelsSizeComponent(true))
    };

    return {
        chooseFrameSize: chooseFrameSize,
        fetchFrameJson,
        setShowWheelsSizeComponent: setShowWheelsSizeComponent
    }
};

const FrameSizeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FrameSizeComponent);


export default FrameSizeContainer;
