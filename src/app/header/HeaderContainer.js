import { connect } from 'react-redux';
import HeaderComponent from './HeaderComponent';
import  frameOperations  from './duck/operations.js';


const mapStateToProps = state => ({
    bikeType: state.bikeType,
    frameSize: state.frameSize,
    frameData: state.frameData
});

const mapDispatchToProps = (dispatch) => {

    const chooseBikeType = (type) => {
        console.log("Header Container - choose Bike Type");
        dispatch(frameOperations.bikeType(type));
        console.log('Header Container - fetch frame');
        dispatch(frameOperations.fetchFrameJson(type));
    };
    const chooseFrameSize = () =>{
        console.log("Frame Container - choose Frame Size");
        dispatch(frameOperations.frameSize(1));
    };

    const fetchFrameJson = (frame) => {
        console.log('Header Container - fetch frame');
        dispatch(frameOperations.fetchFrameJson(frame))
    };

    return {
        chooseBikeType,
        chooseFrameSize,
        fetchFrameJson
    }
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent);


export default HeaderContainer;
