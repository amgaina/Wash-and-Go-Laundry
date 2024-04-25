import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../Components/Images/login.png")}
      style={styles1.background}
    >
      <Pressable onPress={() => navigation.navigate("Login")}>
        <View style={styles1.button}>
          <Text style={{ color: "white", fontSize: 20 }}>
            {" "}
            Lets Start your Laundry
          </Text>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

const styles1 = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "red",
    borderColor: "black",
    padding: 20,
    alignItems: "center",
  },
});

export default GetStarted;
