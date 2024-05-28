import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, incrementQty, decrementQty } from "./ProductReducer";
import { addToCart, incrementQuantity, decrementQuantity } from "./CartReducer";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Go_To_Order = () => {
  const [items, setItems] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((current, prev) => current + prev, 0);
  const navigation = useNavigation();
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = async () => {
      const colRef = collection(db, "types");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      items.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);

  const services = [
    {
      id: "0",
      name: "Clothes",
      image: "./Images/clothes.png",
      quantity: 0,
      price: 2,
    },
    {
      id: "1",
      name: "Medium Bag (18*24 in)",
      image:
        "https://m.media-amazon.com/images/I/61xhUhjJQiL._AC_UF894,1000_QL80_DpWeblab_.jpg",
      quantity: 0,
      price: 17,
    },
    {
      id: "2",
      name: "Large Bag (24*30 in)",
      image: "https://m.media-amazon.com/images/I/61LNLqyIEtL.jpg",
      quantity: 0,
      price: 20,
    },
  ];

  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {" "}
        Lets Estimate Your Order
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
          color: "#682835",
          marginBottom: 20,
        }}
      >
        {" "}
        (Ironing : $ 1.50 per clothing item )
      </Text>

      {product.map((item, index) => (
        <OrderItem item={item} key={index} />
      ))}

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#682835",
            padding: 10,
            marginTop: 10,
            margin: 15,
            borderRadius: 5,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "10%",
          }}
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

          <Pressable
            onPress={() => {
              navigation.navigate("PickUp");
            }}
          >
            <Text
              style={{
                fontSize: 17,
                color: "white",
                fontWeight: "800",
              }}
            >
              Proceed to Pickup
            </Text>
          </Pressable>
        </Pressable>
      )}
    </View>
  );
};

export default Go_To_Order;

function OrderItem(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const addItemToCart = () => {
    dispatch(addToCart(props.item)); //Cart Array {Add the item to the cart}
    dispatch(incrementQty(props.item)); // Product Array(Increase the quantity)
  };
  return (
    <View>
      <Pressable
        style={{
          backgroundColor: "#f8f8f8",
          borderRadius: 8,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 14,
        }}
      >
        <View>
          <Image
            style={{ width: 70, height: 70 }}
            source={{ uri: props.item.image }}
          />
        </View>

        <View>
          <Text style={{ marginBottom: 7 }}> {props.item.name}</Text>
          <Text> ${props.item.price}.00 </Text>
        </View>

        {cart.some((c) => c.id === props.item.id) ? (
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
        ) : (
          <Pressable
            onPress={addItemToCart}
            style={{ width: 80, borderRadius: 6 }}
          >
            <Text
              style={{
                borderColor: "gray",
                borderWidth: 0.8,
                marginVertical: 10,
                color: "#088F8F",
                textAlign: "center",
                padding: 5,
                fontWeight: "bold",
              }}
            >
              {" "}
              Add{" "}
            </Text>
          </Pressable>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
