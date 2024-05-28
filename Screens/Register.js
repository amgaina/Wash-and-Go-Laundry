import React from "react";
import { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Register = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const handleForm = (field, value) => {
    setForm((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const register = () => {
    let errorMessage = "";

    if (form.name === "") {
      errorMessage += "Name: Must Not Be Empty\n";
    }
    if (!isValidEmail(form.email)) {
      errorMessage += "Email: Must be in proper format\n";
    }
    if (!isValidPhoneNumber(form.phone)) {
      errorMessage += "Phone Number: Must contain ten digits\n";
    }
    if (form.address === "") {
      errorMessage += "Please enter your address.\n";
    }
    if (!validatePassword(form.password)) {
      errorMessage +=
        "Password: At least 6 characters and a special character\n";
    }

    if (errorMessage !== "") {
      Alert.alert("Invalid Information", errorMessage);
      return;
    }
    if (
      form.name === "" ||
      form.email === "" ||
      form.phone === "" ||
      form.address === "" ||
      form.password === ""
    ) {
      Alert.alert(
        "Invalid Information ",
        "Please fill all the required fields.",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          { text: "OK"},
        ]
      );
      return;
    }
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => { 
        const user = userCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;

        setDoc(doc(db, "users", `${myUserUid}`), {
          name: form.name,
          email: user,
          address: form.address,
          phone: form.phone,
        });
      })
      .catch((error) => {
        Alert.alert("Account already exists with this email. Try Log In");
      });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView>
          <Text style={{ margin: 5, fontSize: 18, marginTop: 20 }}>
            {" "}
            Create your Account{" "}
          </Text>
          <TextInput
            style={styles3.input}
            placeholder="Full Name"
            value={form.name}
            onChangeText={(text) => handleForm("name", text)}
          />

          <TextInput
            style={styles3.input}
            placeholder="Enter your email address"
            value={form.email}
            onChangeText={(text) => handleForm("email", text)}
            keyboardType="email-address"
          />

          <View style={styles3.phoneInputContainer}>
            <Text style={{ fontSize: 20, marginRight: 9 }}> +1 </Text>
            <TextInput
              style={styles3.phoneInput}
              placeholder="Enter your phone number"
              value={form.phone}
              onChangeText={(text) => handleForm("phone", text)}
              keyboardType="phone-pad"
            />
          </View>

          <TextInput
            style={styles3.input}
            placeholder="Enter your address"
            value={form.address}
            onChangeText={(text) => handleForm("address", text)}
          />
          <TextInput
            style={styles3.input}
            placeholder="Enter your password"
            value={form.password}
            onChangeText={(text) => handleForm("password", text)}
            secureTextEntry
          />
          <Text style={styles3.privacy}>
            {" "}
            By continuing, you agree to your
            <Text style={styles3.link} onPress={() => navigation.navigate("")}>
              {" "}
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text style={styles3.link} onPress={() => navigation.navigate("")}>
              Privacy Policy.
            </Text>{" "}
          </Text>

          <View style={styles3.button}>
            <TouchableOpacity onPress={register}>
              <Text style={{ color: "white", fontSize: 20 }}>Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles3 = StyleSheet.create({
  input: {
    borderColor: "black",
    padding: 3,
    color: "black",
    borderWidth: 2,
    height: 50,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "gray",
    borderRadius: 10,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 2,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    borderColor: "gray",
    borderRadius: 10,
    padding: 3,
  },
  phoneInput: {
    fontSize: 20,
  },
  privacy: {
    marginTop: 10,
    marginLeft: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#682835",
    borderColor: "black",
    padding: 20,
    alignItems: "center",
  },
  link: {
    color: "#682835",
  },
});
export default Register;
