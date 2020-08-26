import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "screens/DetailScreen";
import ListTripScreen from "screens/ListTripScreen";

const StackNavigator = createStackNavigator();
const INITIAL_ROUTE_NAME = "ListTripScreen";

const MainStackNavigator = () => {
  return (
    <StackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={INITIAL_ROUTE_NAME}
    >
      <StackNavigator.Screen name="ListTripScreen" component={ListTripScreen} />
      <StackNavigator.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ header: null }}
      />
    </StackNavigator.Navigator>
  );
};

export default MainStackNavigator;
