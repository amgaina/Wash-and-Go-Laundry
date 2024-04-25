import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import Go_To_Order from "./Components/go_to_order";
import PickUpScreen from "./Screens/PickUpScreen";
import Register from "./Screens/Register";
import GetStarted from "./Screens/GetStarted";

StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerBackVisible: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Go_To_Order"
          component={Go_To_Order}
          options={{ headerTitle: "Place Your Order" }}
        />
        <Stack.Screen
          name="PickUp"
          component={PickUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} options= {{headerBackVisible: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const style2 = StyleSheet.create({});

export default StackNavigator;
