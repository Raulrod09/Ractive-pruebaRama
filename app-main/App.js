//import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Navigation from './app/navigation/Navigation';
import Principal from './app/screens/Principal';
//import { StyleSheet, Text, View } from 'react-native';
import { firebaseApp } from './app/utils/firebase';
import * as firebase from "firebase";

export default function App() {

  /* useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        console.log(user);
      })
  }, []) */


  return (
    <Navigation/>/* ,
    <Principal/> */
  );
}

