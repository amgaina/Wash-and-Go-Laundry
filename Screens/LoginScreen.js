import { React, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleEmail = (newEmail) => {
    setEmail(newEmail);
  };
  const handlePassword = (newPassword) => {
    setPassword(newPassword);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((err) => {
        Alert.alert("The email or password is incorrect.");
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView contentContainerStyle={styles4.scrollViewContent}>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            justifyContent: "center",
            fontWeight: "600",
          }}
        >
          {" "}
          Sign in to your account
        </Text>
        <TextInput
          style={styles4.input}
          placeholder="Enter your email address"
          value={email}
          onChangeText={handleEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles4.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={handlePassword}
          secureTextEntry
        />
      </KeyboardAvoidingView>
      <View style={{ textAlign: "center", alignItems: "center" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Forgot_Password");
          }}
        >
          <Text style={styles4.text1}> Forgot Password ? </Text>
        </Pressable>

        <Pressable
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles4.text1}>
            Don't have an account ?{"  "}
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "600" }}
            >
              Sign Up
            </Text>
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={login}>
        <View style={styles4.button}>
          <Text style={{ color: "white", fontSize: 20 }}> Login </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};
const styles4 = StyleSheet.create({
  input: {
    borderColor: "black",
    padding: 3,
    color: "black",
    borderWidth: 2,
    height: 50,
    fontSize: 20,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "gray",
    borderRadius: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  text1: {
    color: "#682835",
    marginTop: 20,
  },

  button: {
    marginTop: 20,
    backgroundColor: "#682835",
    borderColor: "black",
    padding: 20,
    alignItems: "center",
  },
});
export default LoginScreen;
