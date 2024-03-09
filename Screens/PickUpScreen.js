import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

const PickUpScreen = () => {
  return (
    <SafeAreaView>
              <Text style = {{ fontSize: 30, fontWeight: "600",textAlign: "center", marginTop:50}}>Finalize Your Order</Text>
      <Text style = {{ fontSize: 16, fontWeight: "600", marginHorizontal: 10, marginTop:50}}>Enter your address</Text>
      <TextInput style = {{padding: 15, 
        borderColor: "black", 
        borderWidth: 0.7, 
        borderRadius: 9, 
        marginTop: 20}}/>
    </SafeAreaView>
  )
}

export default PickUpScreen