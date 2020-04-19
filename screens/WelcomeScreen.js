import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, AsyncStorage } from "react-native";
import Slides from "../components/Slides";
import { AppLoading } from "expo";

const SLIDE_DATA = [
  { text: "Welcome to Job App" },
  { text: "Use This to get a Job" },
  { text: "Set Your Location, then swipe away" },
];

const WelcomeScreen = (props) => {
  const [token, setToken] = useState();

  const handlePress = () => {
    props.navigation.navigate("Auth");
  };

  return <Slides data={SLIDE_DATA} handlePress={handlePress} />;
};

const styles = StyleSheet.create({});
export default WelcomeScreen;
