import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { BlurView } from 'expo-blur';
import Strings from "constants/Strings";


const TripItem = ({ id = 0, onPress = () => {} }) => (
  // <BlurView intensity={70} tint="dark"  style={styles.container}>
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.tripIdText}>{Strings.TRIP_ID}: {id}</Text>
  </TouchableOpacity>
  // </BlurView>
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
    backgroundColor: '#51bd8acc'
  },
  tripIdText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold'
  },
});

export default TripItem;
