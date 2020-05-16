import MainComponent from './MainComponent'
import {connect} from "react-redux";
import mainComponentOperations from "./operations";

const mapStateToProps = state => ({
    showFrameSizeComponent: state.showFrameSizeComponent !== undefined ? state.showFrameSizeComponent :  sessionStorage.getItem('showFrameSizeComponent'),
    showFrameComponent: state.showFrameComponent !== undefined ? state.showFrameComponent :  sessionStorage.getItem('showFrameComponent'),
    showWheelsSizeComponent: state.showWheelsSizeComponent !== undefined ? state.showWheelsSizeComponent :  sessionStorage.getItem('showWheelsSizeComponent'),
    showForkComponent: state.showForkComponent !== undefined ? state.showForkComponent :  sessionStorage.getItem('showForkComponent'),
    manufacturersData : state.manufacturersData
});

const mapDispatchToProps = (dispatch) => {
    const fetchManufacturersJson = () => {
        dispatch(mainComponentOperations.fetchManufacturersJson())
    };

    return {
        fetchManufacturersJson: fetchManufacturersJson
    }
};

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);

export default MainContainer;
