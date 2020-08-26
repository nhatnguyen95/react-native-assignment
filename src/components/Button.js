import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewPropTypes } from "react-native";
import PropTypes from 'prop-types';

const Button = ({ onPress = () => {}, title = '', style = {} }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { ...style }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#51bd8a",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 19,
    color: "#51bd8a",
    fontWeight: "bold",
  },
});

Button.propTypes = {
  onPress: PropTypes.func,
  Text: PropTypes.string,
  style: ViewPropTypes.style,
}

export default Button;
