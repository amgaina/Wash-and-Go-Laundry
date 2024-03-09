import { Pressable, Text, View,Image,StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function Services(){
    return (
      <>
      <Text style = {{fontWeight:"bold", fontSize: 30, textAlign:"center", padding:20}}> Services Available </Text> 
      <ScrollView horizontal showsHorizontalScrollIndicator = "false">
            <Pressable style = {{backgroundColor: "white",margin: 15,padding: 18, borderRadius: 7}}>
                <Image source = {require('./Images/LaundryandFold.png')} style = {{width: 80, height: 80, borderRadius:50, alignSelf:"center"}}/>
                <Text style ={{textAlign: "center", color: "red", marginTop: 10}}> Laundry and Fold </Text>
            </Pressable>
            <Pressable style = {{backgroundColor: "white",margin: 15, padding: 18, borderRadius: 7}}>
                <Image source = {require('./Images/DelicateLaundry.png')} style = {{width: 80, height: 80, borderRadius:50, alignSelf:"center"}}/>
                <Text style ={{textAlign: "center", color: "red", marginTop: 10}}> Delicate Laundry</Text>
            </Pressable>
            <Pressable style = {{backgroundColor: "white",margin: 15, padding: 20, borderRadius: 7}}>
                <Image source = {require('./Images/DryCleaning.png')} style = {{width: 80, height: 80, borderRadius:50, alignSelf:"center"}}/>
                <Text style ={{textAlign: "center", color: "red", marginTop: 10}}> Dry Cleaning </Text>
            </Pressable>
            <Pressable style = {{backgroundColor: "white",margin: 15, padding: 20, borderRadius: 7}}>
                <Image source = {require('./Images/Ironing.png')} style = {{width: 80, height: 80, borderRadius:50, alignSelf:"center"}}/>
                <Text style ={{textAlign: "center", color: "red", marginTop: 10}}> Ironing </Text>
            </Pressable>
      </ScrollView>
      </>
    )
}

const styles = StyleSheet.create({
})