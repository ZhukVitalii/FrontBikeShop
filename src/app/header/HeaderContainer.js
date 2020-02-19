import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import  frameOperations  from './duck/operations.js';


const mapStateToProps = state => ({
    bikeType: state.bikeType,
    frameSize: state.frameSize,
    frameData: state.frameData,
    showFrameComponent: state.showFrameComponent
});

const mapDispatchToProps = (dispatch) => {

    const chooseBikeType = (type) => {
        dispatch(frameOperations.bikeType(type));
        dispatch(frameOperations.fetchFrameJson(type));
    };
    const chooseFrameSize = () =>{
        dispatch(frameOperations.frameSize(1));
    };

    const fetchFrameJson = (frame) => {
        dispatch(frameOperations.fetchFrameJson(frame))
    };

    const setShowFrameComponent = () => {
        console.log('Header Component step 1');
        dispatch(frameOperations.showFrameComponent(true))
    };

    return {
        chooseBikeType,
        chooseFrameSize,
        fetchFrameJson,
        setShowFrameComponent
    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent);


export default HeaderContainer;
