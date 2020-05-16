import { connect } from 'react-redux';
import ForkComponent from './ForkComponent';
import forkOperations  from './operations';

const mapStateToProps = state => ({
    bikeType: state.headerReducer.bikeType,
    wheelsDiam: state.wheelsSizeReducer.wheelsDiam,
    manufacturersData : state.mainComponentReducer.manufacturersData,
    manufacturerId: state.forkReducer.manufacturerId,
    forkData: state.forkReducer.forkData
});


const mapDispatchToProps = (dispatch) => {

    const fetchForkJson = (fork) => {
        dispatch(forkOperations.fetchForkJson(fork))
    };

    const setForkManufacturer = (id) =>{
        sessionStorage.setItem("forkManufacturer", id);
    };

    return {
        fetchForkJson,
        setForkManufacturer
    }
};

const ForkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ForkComponent);


export default ForkContainer;
