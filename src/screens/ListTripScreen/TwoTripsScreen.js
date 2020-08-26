import { connect } from "react-redux";
import { getDataAction, clearDataAction } from "core/listTrip/actions";
import { selectIsLoading, selectTrips } from "core/listTrip/selectors";
import { ListTripScreen } from "./index";

const mapStateToProps = (state) => {
  return {
    data: selectTrips(state),
    isLoading: selectIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getDataAction('two-trips')),
  clearData: () => dispatch(clearDataAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTripScreen);