import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./Components/CartReducer";
import ProductReducer from "./Components/ProductReducer";

export default configureStore({
    reducer:{
        cart:CartReducer,
        product:ProductReducer
    }
})