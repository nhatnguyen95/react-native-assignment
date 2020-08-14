import React from "react";
import { View, FlatList } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles";
import { selectTrips } from "core/home/selectors";
import { getDataAction } from "core/home/actions";
import TripItem from "./components/TripItem";

export class HomeScreen extends React.Component {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  onPressItem = (index) => {
    const { navigation } = this.props;
    navigation.navigate('DetailScreen', { tripIndex: index })
  };

  renderItem = ({ item, index }) => (
    <TripItem testId="trip-item" id={item.trip_id} onPress={() => this.onPressItem(index)} />
  );

  keyExtractor = (item) => `item - ${item.trip_id}`;

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: selectTrips(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getDataAction()),
});

HomeScreen.propTypes = {
  data: PropTypes.array,
  getData: PropTypes.func,
};

HomeScreen.defaultProps = {
  data: [],
  getData: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
