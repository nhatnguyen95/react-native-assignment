import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const TripItem = ({ id = 0, onPress = () => {} }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.tripIdText}>Trip Id: {id}</Text>
  </TouchableOpacity>
);

TripItem.propTypes = {
  id: PropTypes.number,
  onPress: PropTypes.func,
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginTop: 1,
  },
  tripIdText: {
    fontSize: 16,
  }
})

export default TripItem;
