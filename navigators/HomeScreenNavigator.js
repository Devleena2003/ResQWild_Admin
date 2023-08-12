import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reports from "../screens/Reports";
import Home from "../screens/Home";
import Volunteers from "../screens/Volunteers";

const Stack = createNativeStackNavigator();

const WelcomeScreenNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9ac991",
        },
        headerTintColor: "#1e5128",
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Dashboard" }}
      />
      <Stack.Screen name="Reports" component={Reports} />
      <Stack.Screen
        name="Volunteers"
        component={Volunteers}
        options={{ title: "List of Volunteers" }}
      />
    </Stack.Navigator>
  );
};

export default WelcomeScreenNavigator;
