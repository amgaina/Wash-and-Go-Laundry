import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Pressable } from "react-native";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";

const FinalScreen = () => {
  // Create an animated value for the balloon scale
  const scaleValue = useRef(new Animated.Value(1)).current;
  const navigation = useNavigation();

  useEffect(() => {
    // Define the animation sequence
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2, // scale up the balloon
        duration: 100, // duration of scale up
        useNativeDriver: true, // use native driver for better performance
      }),
      Animated.timing(scaleValue, {
        toValue: 1, // scale down the balloon
        duration: 100, // duration of scale down
        useNativeDriver: true, // use native driver for better performance
      }),
      Animated.timing(scaleValue, {
        toValue: 1.5, // scale up the balloon to create blast effect
        duration: 100, // duration of scale up
        useNativeDriver: true, // use native driver for better performance
      }),
      Animated.timing(scaleValue, {
        toValue: 0, // scale down to zero to make it disappear
        duration: 100, // duration of scale down
        useNativeDriver: true, // use native driver for better performance
      }),
    ]).start();
  }, [scaleValue]);

  return (
    <>
      <View style={styles.container}>
        <Animated.View
          style={[styles.balloon, { transform: [{ scale: scaleValue }] }]}
        />
        <Text style={styles.title}>Thank You!</Text>
        <Text style={styles.message}>
          Thanks for placing your order. We appreciate your business. One of our
          agents will contact you in a few minutes.
        </Text>
        <Text style={styles.footer}>Thank you.</Text>
        <Pressable onPress={() => navigation.navigate("Home")}>
          <View style={styles.button}>
            <Text style={{ color: "white", fontSize: 20 }}>Back to Home</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.lottieContainer}>
        <LottieView
          source={require("./Animation.json")}
          autoPlay
          loop
          style={styles.lottieAnimation}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  balloon: {
    width: 100,
    height: 150,
    backgroundColor: "red",
    borderRadius: 75,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#682835",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    color: "#333",
    marginBottom: 30,
  },
  footer: {
    fontSize: 16,
    color: "#682835",
  },
  lottieContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  lottieAnimation: {
    width: 700,
    height: 700,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#682835",
    borderColor: "black",
    padding: 20,
    alignItems: "center",
  },
});

export default FinalScreen;
