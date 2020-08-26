import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Strings from "constants/Strings";

const EmptyData = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="smileo" size={60} color="#51bd8a" />
  <Text style={styles.text}>{Strings.DATA_NOT_FOUND}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    height: 300
  },
  text: {
    marginTop: 10,
    fontSize: 19,
    color: "#51bd8a",
    fontWeight: "bold",
  }
});

export default EmptyData;
