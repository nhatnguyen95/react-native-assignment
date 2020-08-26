import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Layout from "components/Layout";
import Button from "components/Button";
import Strings from "constants/Strings";
import styles from "./styles";

class HomeScreen extends React.Component {
  navigateTo = (screen) => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  render() {
    return (
      <Layout title="Home" canBack={false}>
        <Button  onPress={() => this.navigateTo("TwoTripsScreen")} title={Strings.TWO_TRIPS} />
        <Button  onPress={() => this.navigateTo("EmptyTripScreen")} title={Strings.EMPTY_TRIP} />
        <Button  onPress={() => this.navigateTo("BigTripsScreen")} title={Strings.BIG_TRIPS} />
      </Layout>
    );
  }
}

export default HomeScreen;
