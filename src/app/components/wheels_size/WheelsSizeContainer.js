import wheelsSizeOperations from "./operations";
import {connect} from "react-redux";
import WheelsSizeComponent from "./WheelsSizeComponent";

const mapStateToProps = state => ({
    bikeType: state.headerReducer.bikeType,
    frameSize: state.frameSizeReducer.frameSize,
    showFrameComponent: state.showFrameComponent,
    showWheelsSizeComponent: state.showWheelsSizeComponent
});

const mapDispatchToProps = (dispatch) => {

    const chooseWheelSize = (request) =>{
        sessionStorage.setItem("wheelsSize", request.wheelsSize);
        sessionStorage.setItem("wheelsSizeId", request.wheelsSizeId);
        dispatch(wheelsSizeOperations.wheelsSize(request.wheelsSize));
        dispatch(wheelsSizeOperations.fetchFrameJson({
            'bikeType': request.bikeType,
            'bikeTypeId': request.bikeTypeId,
            'frameSizeId': request.frameSizeId,
            'frameSize': request.frameSize,
            'wheelsSizeId': request.wheelsSizeId,
            'wheelsSize': request.wheelsSize,
        }));
    };

    const fetchFrameJson = (frame) => {
        dispatch(wheelsSizeOperations.fetchFrameJson(frame))
    };

    const setShowFrameComponent = () => {
        sessionStorage.setItem("showFrameComponent", true);
        dispatch(wheelsSizeOperations.showFrameComponent(true))
    };

    return {
        chooseWheelSize: chooseWheelSize,
        fetchFrameJson,
        setShowFrameComponent: setShowFrameComponent
    }
};

const WheelsSizeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WheelsSizeComponent);


export default WheelsSizeContainer;
