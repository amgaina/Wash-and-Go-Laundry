import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import small_bag from './Images/small_bag_image.png';
import medium_bag from './Images/medium_bag_image.png';
import large_bag from './Images/large_bag_image.png';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, incrementQty,decrementQty } from './ProductReducer';
import { addToCart, incrementQuantity, decrementQuantity } from './CartReducer';
import { useNavigation } from '@react-navigation/native';

const Go_To_Order = () => {


  const cart = useSelector((state)=> state.cart.cart);
  const total = cart.map((item) =>item.quantity * item.price).reduce((current, prev) => current + prev, 0);
  const navigation = useNavigation();

  const product = useSelector((state)=> state.product.product);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(product.length > 0) return;
    
    const fetchProducts = ()=>{
      services.map((service) => dispatch(getProducts(service)));
    }
    fetchProducts();
  },[]);


  const services = [
    {
      id:"0",
      name: "Small Bag (12*18 in)",
      image: small_bag,
      quantity:0,
      price: 12

    },
    {
      id:"1",
      name: "Medium Bag (18*24 in)",
      image: medium_bag,
      quantity:0,
      price: 17

    },
    {
      id:"2",
      name: "Large Bag (24*30 in)",
      image: large_bag,
      quantity:0,
      price: 20

    },
    

  ]


  return (
    <View>
      <Text style = {{fontWeight:"bold", fontSize: 30, textAlign:"center", marginTop: 20}}> Lets Estimate Your Order</Text> 
      <Text style = {{fontWeight:"bold", fontSize: 20, textAlign:"center", marginTop: 20, color: "red", marginBottom: 60}}> (Remember, it is just an estimate......)</Text> 

        {product.map((item, index) =>(
          <OrderItem item = {item} key = {index}/>
        ))}


        {total === 0 ? (
          null
        ): 
        (
          <Pressable style = {
            {backgroundColor: "red",
            padding: 10,
            marginTop:90,
            margin: 15,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "10%",
        }
          }>
            <View>
            <Text style = {{
              fontSize: 17,
              color: "white",
              fontWeight: "800"
            }}>
            {
              cart.length
            } types | ${total}.00
            </Text>

            <Text style = {{
              color: "white"
            }}>
              Extra Charges may apply
            </Text>
            </View>

          <Pressable onPress={()=>{
            navigation.navigate("PickUp")
          }}>
          <Text style = {{
              fontSize: 17,
              color: "white",
              fontWeight:"800"
            }}>
              Proceed to Pickup
            </Text>
            
          </Pressable>
          </Pressable>
        )}
    
    </View>
  )
}

export default Go_To_Order

function OrderItem(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart)


  const addItemToCart = () =>{
    dispatch(addToCart(props.item)) //Cart Array {Add the item to the cart}
    dispatch(incrementQty(props.item)) // Product Array(Increase the quantity)
  }
  return (
    <View>
        <Pressable style = {{backgroundColor: "#f8f8f8", borderRadius: 8, padding: 10, flexDirection: "row",alignItems: "center",justifyContent: "space-between", margin: 14}}>
          <View>
              <Image style = {{width: 70, height: 70}} source = {props.item.image}/>
          </View>
                
          <View>
              <Text style = {{marginBottom: 7}}> {props.item.name}</Text>
              <Text> ${props.item.price}.00 </Text>
          </View>

          {cart.some((c) =>c.id === props.item.id) ? 
          (
          
          <Pressable
          style={{
            flexDirection: "row",
            paddingHorizontal: 10,
            paddingVertical: 5,
          }}
        >
          <Pressable
            onPress={() => {
              dispatch(decrementQuantity(props.item)); // cart
              dispatch(decrementQty(props.item)); // product
            }}
            style={{
              width: 26,
              height: 26,
              borderRadius: 13,
              borderColor: "#BEBEBE",
              backgroundColor: "#E0E0E0",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#088F8F",
                paddingHorizontal: 6,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              -
            </Text>
          </Pressable>

          <Pressable>
            <Text
              style={{
                fontSize: 19,
                color: "#088F8F",
                paddingHorizontal: 8,
                fontWeight: "600",
              }}
            >
              {props.item.quantity}
            </Text>
          </Pressable>

          <Pressable
            onPress={() => {
              dispatch(incrementQuantity(props.item)); // cart
              dispatch(incrementQty(props.item)); //product
            }}
            style={{
              width: 26,
              height: 26,
              borderRadius: 13,
              borderColor: "#BEBEBE",
              backgroundColor: "#E0E0E0",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: "#088F8F",
                paddingHorizontal: 6,
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              +
            </Text>
          </Pressable>
        </Pressable>
      ): (
            <Pressable onPress = {addItemToCart} style = {{width: 80, borderRadius: 6 }}>
              <Text style = {{borderColor: "gray", borderWidth: 0.8, marginVertical: 10, color: "#088F8F", textAlign: "center", padding: 5, fontWeight:"bold"}}> Add </Text>                
          </Pressable>

          )}
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})