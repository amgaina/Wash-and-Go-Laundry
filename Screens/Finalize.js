import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState, React } from "react";
import { useNavigation } from "@react-navigation/native";

const FinalizeOrder = () => {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        After you confirm, One of our agent will get in contact with you within
        few minutes.
      </Text>

      <Text
        style={{
          margin: 20,
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "center",
          color: "red",
        }}
      >
        Please Fill the form below:{" "}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter your phone number"
        onChangeText={(text) => {
          setphone(text);
        }}
        value={phone}
      />
      <Pressable onPress={() => navigation.navigate("FinalScreen")}>
        <View style={styles.button}>
          <Text style={{ color: "white", fontSize: 20 }}>
            {" "}
            Confirm your Order
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: "red",
    margin: 10,
    padding: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#682835",
    borderColor: "black",
    padding: 20,
    alignItems: "center",
  },
});

export default FinalizeOrder;
