import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const GetStarted = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  return (
    <View style={styles1.container}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#682835"
          style={styles1.loadingIndicator}
        />
      )}
      <ImageBackground
        source={require("../Components/Images/login.png")}
        style={styles1.background}
        onLoadEnd={() => setLoading(false)}
      >
        {!loading && (
          <Pressable onPress={() => navigation.navigate("Login")}>
            <View style={styles1.button}>
              <Text style={styles1.buttonText}>Get Started</Text>
            </View>
          </Pressable>
        )}
      </ImageBackground>
    </View>
  );
};

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingIndicator: {
    position: "absolute",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    backgroundColor: "#682835",
    borderColor: "black",
    padding: 20,
    alignItems: "center",
    marginTop: 500,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
});

export default GetStarted;
