import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";


function BagQuantity() {
  const navigation = useNavigation();
  return (
    <View>
            <View style = {styles_bag.go_to_cart}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Go_To_Order")}>
                            <Text style = {[styles_bag.go_to_order]}> Let's Make Order </Text>
                        </TouchableOpacity>
            </View>
            <View style = {styles_bag.home_footer}>
                        <TouchableOpacity onPress={()=> navigation.navigate("Services")}>
                            <Text style = {[styles_bag.home_footer]}> Services </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate("How_it_works")}>
                            <Text style = {[styles_bag.home_footer]}> How it works </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate("Pricing")}>
                            <Text style = {[styles_bag.home_footer]}> Pricing </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate("FAQs")}>
                            <Text style = {[styles_bag.home_footer]}> FAQs </Text>
                        </TouchableOpacity>
            </View>


    </View>
  )
}

const styles_bag = StyleSheet.create({

    go_to_order:{
        color: "white",
        fontSize:30,
        textAlign: "center",
        paddingTop: 10,
    },
    go_to_cart:{
        backgroundColor: "red",
        height: 60,
        width: "80%",
        alignContent:"center",
        alignSelf:"center",
        marginTop:40,
        borderRadius: 10,
    
    },
    home_footer:{
        color: "#682835",
        backgroundColor: "white",
        padding: 10,
        marginTop: 5,
        paddingTop: 5,
        paddingBottom: 10,
        fontSize: 18,
        width: "100%",
        justifyContent: "center",
        alignSelf:"center",
        flexDirection: "row",
        borderRadius: 10,
    }
})
export default BagQuantity;

