import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layout from "components/Layout";
import LoadingView from "components/LoadingView";
import EmptyData from "components/EmptyData";
import { selectIsLoading, selectTrips } from "core/listTrip/selectors";
import { getDataAction } from "core/listTrip/actions";
import styles from "./styles";
import TripItem from "./components/TripItem";


export class ListTripScreen extends React.Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  onPressItem = (index) => {
    const { navigation } = this.props;
    navigation.navigate("DetailScreen", { tripIndex: index });
  };

  renderItem = ({ item, index }) => (
    <TripItem
      testId="trip-item"
      id={item.trip_id}
      onPress={() => this.onPressItem(index)}
    />
  );

  keyExtractor = (item) => `item - ${item.trip_id}`;

  componentWillUnmount = () => {
    const { clearData } = this.props;
    clearData();
  };
  

  render() {
    const { data, navigation, isLoading } = this.props;
    return (
      <Layout
        navigation={navigation}
        style={styles.container}
        title="Trip Screen"
      >
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          testID="flat-list"
          ListEmptyComponent={EmptyData}
        />
      <LoadingView isLoading={isLoading}/> 
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: selectTrips(state),
    isLoading: selectIsLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getDataAction()),
});

ListTripScreen.propTypes = {
  data: PropTypes.array,
  getData: PropTypes.func,
  isLoading: PropTypes.bool,
  clearData: PropTypes.func,
};

ListTripScreen.defaultProps = {
  data: [],
  getData: () => {},
  isLoading: false,
  clearData: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTripScreen);
