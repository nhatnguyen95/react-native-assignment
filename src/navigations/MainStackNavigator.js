import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "screens/DetailScreen";
import HomeScreen from "screens/HomeScreen";

const StackNavigator = createStackNavigator();
const INITIAL_ROUTE_NAME = "HomeScreen";

const MainStackNavigator = () => {
  return (
    <StackNavigator.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <StackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />
      <StackNavigator.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerTitle: 'Trip Details' }}
      />
  
    </StackNavigator.Navigator>
  );
}


export default MainStackNavigator;
