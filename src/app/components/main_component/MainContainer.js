import MainComponent from './MainComponent'
import {connect} from "react-redux";
import frameOperations from "../header/operations";

const mapStateToProps = state => ({
    showFrameSizeComponent: state.showFrameSizeComponent
});

const mapDispatchToProps = (dispatch) => {
    // const setShowFrameSizeComponent = () => {
    //     dispatch(frameOperations.showFrameSizeComponent(true))
    // };
    //
    // return {
    //     setShowFrameSizeComponent: setShowFrameSizeComponent
    // }
};

const MainContainer = connect(
    mapStateToProps,
   // mapDispatchToProps
)(MainComponent);

export default MainContainer;
