/* istanbul ignore file */
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import PropTypes from 'prop-types';
import { AntDesign } from "@expo/vector-icons";
import { screenWidth } from "utils/CommonUtils";

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    height: Platform.OS === 'ios' ? 80 : 90,
    width: screenWidth,

    alignItems: "center",
    flexDirection: "row",
    paddingTop: 25,
  },
  logo: {
    width: 60,
    height: 60,
  },
  titleText: {
    fontSize: 18,
    textAlign: "center",
    color: "#51bd8a",
    fontWeight: "bold",
  },
  backButton: {
    marginHorizontal: 20,
  }
});

const Layout = ({ navigation, children, title = "", canBack = true }) => {
  const onPressBack = () => {
    navigation.goBack();
  }

  return (
    <ImageBackground
      imageStyle={{ marginTop: 100 }}
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/images/background.png")}
    >
        <View style={styles.header}>
          {!canBack ? (
            <Image
              style={styles.logo}
              source={require("../assets/icons/gigacover-logo.png")}
            />
          ) : (
            <TouchableOpacity onPress={onPressBack} style={styles.backButton}>
              <AntDesign name="back" size={30} color="#51bd8a" />
            </TouchableOpacity>
          )}
          <Text style={styles.titleText}>{title}</Text>
        </View>
        {children}
    </ImageBackground>
  );
};

Layout.propTypes = {
  navigation: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  canBack: PropTypes.bool,
}

export default Layout;
