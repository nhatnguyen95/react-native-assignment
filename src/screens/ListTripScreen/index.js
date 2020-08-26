import React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layout from "components/Layout";
import styles from "./styles";
import TripItem from "./components/TripItem";
import LoadingView from "components/LoadingView";
import { selectIsLoading, selectTrips } from "core/listTrip/selectors";
import { getDataAction } from "core/listTrip/actions";

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

  render() {
    const { data, navigation, isLoading } = this.props;
    console.log('isLoading', isLoading);
    return (
      <Layout
        navigation={navigation}
        style={styles.container}
        title="Home"
        canBack={false}
      >
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          testID="flat-list"
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
};

ListTripScreen.defaultProps = {
  data: [],
  getData: () => {},
  isLoading: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTripScreen);
