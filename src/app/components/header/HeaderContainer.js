import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import  headerOperations  from './operations.js';


const mapStateToProps = state => ({
    bikeType: state.bikeType,
    frameSize: state.frameSize,
    frameData: state.frameData,
    showFrameSizeComponent: state.showFrameSizeComponent
});

const mapDispatchToProps = (dispatch) => {

    const chooseBikeType = (type) => {
        dispatch(headerOperations.bikeType(type));
        dispatch(headerOperations.fetchFrameJson(type));
    };
    const chooseFrameSize = () =>{
        dispatch(headerOperations.frameSize(1));
    };

    const fetchFrameJson = (frame) => {
        dispatch(headerOperations.fetchFrameJson(frame))
    };

    const setShowFrameSizeComponent = () => {
        console.log('Header Component step 1');
        dispatch(headerOperations.showFrameSizeComponent(true))
    };

    return {
        chooseBikeType,
        chooseFrameSize,
        fetchFrameJson,
        setShowFrameSizeComponent: setShowFrameSizeComponent
    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent);


export default HeaderContainer;
