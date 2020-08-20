import React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Layout from "components/Layout";
import styles from "./styles";
import { selectTrips } from "core/home/selectors";
import { getDataAction } from "core/home/actions";
import TripItem from "./components/TripItem";
import LoadingView from "components/LoadingView";
import { selectIsLoading } from "../../core/home/selectors";

export class HomeScreen extends React.Component {
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

HomeScreen.propTypes = {
  data: PropTypes.array,
  getData: PropTypes.func,
  isLoading: PropTypes.bool,
};

HomeScreen.defaultProps = {
  data: [],
  getData: () => {},
  isLoading: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
