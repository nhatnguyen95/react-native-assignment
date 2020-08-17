import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Strings from "constants/Strings";

const TripItem = ({ id = 0, onPress = () => {} }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.tripIdText}>{Strings.TRIP_ID}: {id}</Text>
  </TouchableOpacity>
);

TripItem.propTypes = {
  id: PropTypes.number,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#fff",
    marginTop: 1,
  },
  tripIdText: {
    fontSize: 16,
  },
});

export default TripItem;
