import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator.js';
import { Provider } from 'react-redux';
import store from "./store.js";

export default function App() {
  return (
    <Provider store = {store}>
       <StackNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
