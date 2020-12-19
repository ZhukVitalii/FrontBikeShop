import { connect } from 'react-redux';
import WheelComponent from './WheelComponent';
import wheelOperations  from './operations';

const mapStateToProps = state => ({
    bikeType: state.headerReducer.bikeType,
    wheelsDiam: state.wheelsSizeReducer.wheelsDiam,
    manufacturersData : state.mainComponentReducer.manufacturersData,
    manufacturerId: state.wheelReducer.manufacturerId,
    wheelData: state.wheelReducer.wheelData
});


const mapDispatchToProps = (dispatch) => {

    const fetchWheelJson = (wheel) => {
        dispatch(wheelOperations.fetchWheelJson(wheel))
    };

    const setWheelManufacturer = (id) =>{
        sessionStorage.setItem("wheelManufacturer", id);
    };

    return {
        fetchWheelJson,
        setWheelManufacturer
    }
};

const WheelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(WheelComponent);


export default WheelContainer

