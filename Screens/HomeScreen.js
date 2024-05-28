import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Alert,
    Pressable,
    Image,
    TextInput,
    ActivityIndicator,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import * as Location from "expo-location";
  import { Entypo } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import Services from "../Components/Services";
  import BagQuantity from "../Components/BagQuantity";
  
  // HomeScreen for the Application
  
  const HomeScreen = () => {
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
      "We are loading your location..."
    );
    const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      checkIfLocationEnabled();
      getCurrentLocation();
    }, []);
  
    const checkIfLocationEnabled = async () => {
      let enabled = await Location.hasServicesEnabledAsync();
      if (!enabled) {
        Alert.alert(
          "Location Service Not enabled",
          "Please Enable the location Services",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            { text: "OK" },
          ],
          { cancelable: false }
        );
      } else {
        setLocationServicesEnabled(enabled);
      }
    };
  
    const getCurrentLocation = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status != "granted") {
          Alert.alert(
            "Permission Denied",
            "Allow the app to use the location service.",
            [
              {
                text: "Cancel",
                style: "cancel",
              },
              { text: "OK" },
            ],
            { cancelable: false }
          );
        }
        const { coords } = await Location.getCurrentPositionAsync();
  
        if (coords) {
          const { latitude, longitude } = coords;
          let response = await Location.reverseGeocodeAsync({
            latitude,
            longitude,
          });
  
          for (let item of response) {
            let address = `${item.name} ${item.city} ${item.postalCode}`;
            setDisplayCurrentAddress(address);
          }
        }
      } catch (error) {
        Alert.alert(
          "Please turn on the location to use this app. Otherwise it will not function properly."
        );
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <SafeAreaView style={{ backgroundColor: "#FAF9F0", flex: 1 }}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#682835" />
          </View>
        ) : (
          <>
            {/* Location and Profile */}
            <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
              <Entypo name="location-pin" size={30} color="#682835" />
              <View>
                <Text style={{ fontSize: 18, fontWeight: "600" }}> Home </Text>
                <Text style={{ fontWeight: "500" }}>{displayCurrentAddress}</Text>
              </View>
              <Pressable style={{ marginLeft: "auto", marginRight: 7 }}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                  source={require("../Components/Images/login.png")}
                  onLoadEnd={() => setLoading(false)}
                />
              </Pressable>
            </View>
            {/* Search Bar */}
            <View
              style={{
                padding: 10,
                margin: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderWidth: 0.8,
                borderColor: "#C0C0C0",
                borderRadius: 7,
              }}
            >
              <TextInput placeholder="Search for items " />
              <AntDesign name="search1" size={24} color="#682835" />
            </View>
  
            {/* Image*/}
            <Image
              source={require("../Components/Images/HomeScreen.png")}
              style={{
                borderRadius: 6,
                alignSelf: "center",
                height: "25%",
                maxWidth: "90%",
                marginBottom: "auto",
                marginTop: 30,
              }}
              onLoadEnd={() => setLoading(false)}
            />
            <Services />
            <BagQuantity />
          </>
        )}
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
  export default HomeScreen;
  