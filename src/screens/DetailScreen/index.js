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
        <ScrollView testID="scroll-view">
          {tripIndex === -1 || !trip ? null : (
            <View>
              <Text style={styles.tripIdText}>#{trip.trip_id}</Text>
              <View>
                {this.renderRow("Duration", trip.duration, "second(s)")}
                {this.renderRow("Distance", trip.distance, "kilometer(s)")}
                {this.renderRow(
                  "Start Time",
                  moment(trip.start_time).format(Strings.DATE_TIME_FORMAT)
                )}
                {this.renderRow(
                  "End Time",
                  moment(trip.end_time).format(Strings.DATE_TIME_FORMAT)
                )}
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
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
