import MainComponent from './MainComponent'
import {connect} from "react-redux";
import frameOperations from "../header/duck/operations";

const mapStateToProps = state => ({
    showFrameComponent: state.showFrameComponent
});

const mapDispatchToProps = (dispatch) => {
    const setShowFrameComponent = () => {
        dispatch(frameOperations.showFrameComponent(true))
    };

    return {
        setShowFrameComponent
    }
};

const MainContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainComponent);

export default MainContainer;
