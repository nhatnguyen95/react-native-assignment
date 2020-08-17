import React from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import moment from "moment";
import { selectTrips } from "core/home/selectors";
import Strings from "../../constants/Strings";
import styles from "./styles";

export class DetailScreen extends React.Component {
  state = {
    tripIndex: -1,
  };

  componentDidMount() {
    const { route } = this.props;
    const tripIndex = route?.params?.tripIndex;
    this.setState({ tripIndex });
  }

  renderRow = (label, value, unit) => (
    <View testID={label} style={styles.row}>
      <Text>{label}: </Text>
      <Text>
        {value} {unit}
      </Text>
    </View>
  );

  render() {
    const { tripIndex } = this.state;
    const { trips } = this.props;
    const trip = trips[tripIndex];
    return (
      <View style={styles.container}>
        <ScrollView >
          <View testID="trip-view" trips={trips}>
            <Text style={styles.tripIdText}>#{trip?.trip_id || 0}</Text>
            <View>
              {this.renderRow(Strings.DURATION, trip?.duration || 0, Strings.SECONDS)}
              {this.renderRow(Strings.DISTANCE, trip?.distance || 0, Strings.KILOMETERS)}
              {this.renderRow(
                Strings.START_TIME,
                moment(trip?.start_time || 0).format(Strings.DATE_TIME_FORMAT)
              )}
              {this.renderRow(
                Strings.END_TIME,
                moment(trip?.end_time || 0).format(Strings.DATE_TIME_FORMAT)
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trips: selectTrips(state),
  };
};

DetailScreen.propTypes = {
  trips: PropTypes.array,
};

DetailScreen.defaultProps = {
  trips: [],
};

export default connect(mapStateToProps, null)(DetailScreen);
