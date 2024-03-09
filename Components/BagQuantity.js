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
    
    }
})
export default BagQuantity;

