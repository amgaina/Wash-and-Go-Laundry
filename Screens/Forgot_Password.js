import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Password_Forgot() {
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <SafeAreaView style = {{flex: 1, backgroundColor: "white", alignItems: "center", padding: 10}}>
      <TextInput
        style={styles5.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={handleEmail}
        keyboardType="email-address"
      />
      <View style={styles5.button}>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <Text style={{ color: "white", fontSize: 20 }}> Login </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles5 = StyleSheet.create({
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
  button: {
    marginTop: 20,
    backgroundColor: "red",
    borderColor: "black",
    padding: 20,
    alignItems: "center",
  },
});
