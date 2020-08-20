/* istanbul ignore file */
import React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import PropTypes from "prop-types";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const LoadingView = ({ isLoading = false }) => {
  React.useEffect(() => {
   if(isLoading) LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [isLoading]);
  if (!isLoading) return null;
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#51bd8a" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "#000c",
    justifyContent: "center",
    zIndex: 1,
  },
});

LoadingView.propTypes = {
  isLoading: PropTypes.bool,
};

export default LoadingView;
