import { connect } from 'react-redux';
import FrameComponent from './FrameComponent';
import frameOperations  from './operations';
import forkOperations from '../fork/operations';

const mapStateToProps = state => ({
    bikeType: state.headerReducer.bikeType,
    frameSize: state.frameSizeReducer.frameSize,
    frameData: state.frameReducer.frameData,
    wheelsDiam: state.wheelsSizeReducer.wheelsDiam,
    manufacturersData : state.mainComponentReducer.manufacturersData,
    manufacturerId: state.frameReducer.manufacturerId
});


const mapDispatchToProps = (dispatch) => {

    const chooseBikeType = (type) => {
        dispatch(frameOperations.fetchFrameJson(type));
    };
    const fetchFrameJson = (frame) => {
        dispatch(frameOperations.fetchFrameJson(frame))
    };

    const setFrameManufacturer = (id) =>{
        sessionStorage.setItem("frameManufacturer", id);
    };
    const setShowFork = (show) =>{
        sessionStorage.setItem("showForkComponent", show);
        sessionStorage.setItem("showFrameComponent", show ? false : show);
        dispatch(frameOperations.showForkComponent(true))
    };
    const setChosenFrameId = (id) => {
        sessionStorage.setItem("frameId", id);
    };

    const fetchForkJson = (payload) => {
        dispatch(forkOperations.fetchForkJson(payload))
    };
    return {
        chooseBikeType,
        fetchFrameJson,
        setFrameManufacturer,
        fetchForkJson,
        setChosenFrameId,
        setShowFork
    }
};

const FrameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FrameComponent);


export default FrameContainer;
