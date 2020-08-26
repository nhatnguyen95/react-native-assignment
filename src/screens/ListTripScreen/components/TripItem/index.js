import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Strings from "constants/Strings";


const TripItem = ({ id = 0, onPress = () => {} }) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={onPress}>
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
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#51bd8a',
    paddingHorizontal: 10,
  },
  tripIdText: {
    fontSize: 19,
    color: '#51bd8a',
    fontWeight: 'bold'
  },
});

export default TripItem;
