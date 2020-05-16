import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import  headerOperations  from './operations.js';


const mapStateToProps = state => ({
    bikeType: state.bikeType,
    frameSize: state.frameSize,
    frameData: state.frameData,
    showFrameSizeComponent: state.showFrameSizeComponent,
    showWheelsSizeComponent: state.showWheelsSizeComponent
});

const mapDispatchToProps = (dispatch) => {

    const chooseBikeType = (type) => {
        sessionStorage.setItem("bikeType", type.type);
        sessionStorage.setItem("bikeTypeId", type.typeId);
        dispatch(headerOperations.bikeType(type));
    };

    const fetchFrameJson = (frame) => {
        dispatch(headerOperations.fetchFrameJson(frame))
    };

    const setShowFrameSizeComponent = () => {
        sessionStorage.setItem("showFrameSizeComponent", true);
        dispatch(headerOperations.showFrameSizeComponent(true))
    };

    return {
        chooseBikeType,
        fetchFrameJson,
        setShowFrameSizeComponent: setShowFrameSizeComponent
    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent);


export default HeaderContainer;
