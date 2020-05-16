// import mainComponentOperations from "../main_component/operations";
import {connect} from "react-redux";
import ManufacturerDDComponent from "../manufacturer_dropdown/ManufacturerDDComponent";

const mapStateToProps = state => ({
    manufacturersData : state.mainComponentReducer.manufacturersData
});

// const mapDispatchToProps = (dispatch) => {
//     const fetchManufacturersJson = () => {
//         dispatch(mainComponentOperations.fetchManufacturersJson())
//     };
//
//     return {
//         fetchManufacturersJson: fetchManufacturersJson
//     }
// };

const ManufacturerDDContainer = connect(
    mapStateToProps,
    // mapDispatchToProps
)(ManufacturerDDComponent);

export default ManufacturerDDContainer;
