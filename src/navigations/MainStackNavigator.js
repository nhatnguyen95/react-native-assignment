import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "screens/DetailScreen";
import TwoTripsScreen from "screens/ListTripScreen/TwoTripsScreen";
import EmptyTripScreen from "screens/ListTripScreen/EmptyTripScreen";
import BigTripsScreen from "screens/ListTripScreen/BigTripsScreen";
import HomeScreen from "screens/HomeScreen";

const StackNavigator = createStackNavigator();
const INITIAL_ROUTE_NAME = "HomeScreen";

const MainStackNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <StackNavigator.Screen name="TwoTripsScreen" component={TwoTripsScreen} />
      <StackNavigator.Screen name="EmptyTripScreen" component={EmptyTripScreen} />
      <StackNavigator.Screen name="BigTripsScreen" component={BigTripsScreen} />
      <StackNavigator.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ header: null }}
      />
    </StackNavigator.Navigator>
  );
};

export default MainStackNavigator;
