import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PickUpScreen = () => {
  const [address, setAddress] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((current, prev) => current + prev, 0);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          textAlign: "center",
          marginTop: 50,
        }}
      >
        Finalize Your Order
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          marginHorizontal: 10,
          marginTop: 50,
        }}
      >
        Address
      </Text>

      <TextInput
        style={{
          padding: 15,
          borderColor: "black",
          borderWidth: 0.7,
          borderRadius: 9,
          marginTop: 20,
        }}
        placeholder="Enter your pickup address"
        onChangeText={(address) => setAddress(address)}
      />

      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          marginHorizontal: 10,
          marginTop: 50,
        }}
      >
        Select Time
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {times.map((item, index) => (
          <Pressable
            key={index}
            style={
              selectedTime === item.time
                ? {
                    margin: 10,
                    padding: 7,
                    borderColor: "red",
                    borderWidth: 0.7,
                    backgroundColor: "green",
                  }
                : {
                    margin: 10,
                    padding: 7,
                    borderColor: "gray",
                    borderWidth: 0.7,
                  }
            }
            onPress={() => setSelectedTime(item.time)}
          >
            <Text> {item.time} </Text>
          </Pressable>
        ))}
      </ScrollView>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          marginHorizontal: 10,
          marginTop: 50,
        }}
      >
        Delivery Date
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {durations.map((item, i) => (
          <Pressable
            key={i}
            style={
              selectedDuration === item.duration
                ? {
                    margin: 10,
                    padding: 7,
                    borderColor: "red",
                    borderWidth: 0.7,
                    backgroundColor: "green",
                  }
                : {
                    margin: 10,
                    padding: 7,
                    borderColor: "gray",
                    borderWidth: 0.7,
                  }
            }
            onPress={() => setSelectedDuration(item.duration)}
          >
            <Text> {item.duration} </Text>
          </Pressable>
        ))}
      </ScrollView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#682835",
            padding: 10,
            marginTop: 179,
            margin: 15,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "10%",
          }}
          onPress={() => navigation.navigate("Finalize")}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Entypo
              name="shopping-cart"
              size={24}
              color="black"
              style={{ marginRight: 5 }}
            />
            <Text
              style={{
                fontSize: 17,
                color: "white",
                fontWeight: "800",
              }}
            >
              | ${total}.00
            </Text>
          </View>

          <Text
            style={{
              fontSize: 17,
              color: "white",
              fontWeight: "800",
            }}
          >
            Proceed to Finalize
          </Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

const times = [
  {
    id: "0",
    time: "10:00 am",
  },
  {
    id: "1",
    time: "11:00 am",
  },
  {
    id: "2",
    time: "12:00 pm",
  },
  {
    id: "3",
    time: "1:00 pm",
  },
  {
    id: "4",
    time: "2:00 pm",
  },
  {
    id: "5",
    time: "3:00 pm",
  },
  {
    id: "6",
    time: "4:00 pm",
  },
  {
    id: "7",
    time: "5:00 pm",
  },
  {
    id: "8",
    time: "6:00 pm",
  },
];

const durations = [
  {
    id: "0",
    duration: "Today",
  },
  {
    id: "1",
    duration: "Tomorrow",
  },
  {
    id: "2",
    duration: "2-3 days",
  },
];

export default PickUpScreen;
