import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { screenWidth } from "utils/CommonUtils";

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    height: 80,
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

const Layout = ({ children, title = "", canBack = true }) => {
  const navigation = useNavigation(); 
  const onPressBack = () => {
    navigation.goBack();
  }

  return (
    <ImageBackground
      imageStyle={{ alignSelf: "flex-end" }}
      resizeMode="cover"
      style={styles.background}
      source={require("../assets/images/background.png")}
    >
      <BlurView
        intensity={100}
        style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
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
      </BlurView>
    </ImageBackground>
  );
};

export default Layout;
