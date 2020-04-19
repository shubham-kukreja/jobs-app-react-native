import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AuthScreen from "../screens/AuthScreen";
import DeckScreen from "../screens/DeckScreen";
import MapScreen from "../screens/MapScreen";
import ReviewScreen from "../screens/ReviewScreen";
import SettingsScreen from "../screens/SettingsScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const secondaryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Review" component={ReviewScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const secondaryTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => <Ionicons name="md-map" size={22} />,
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="Deck"
        component={DeckScreen}
        options={{
          tabBarIcon: () => <Ionicons name="ios-home" size={22} />,
        }}
      />
      <Tab.Screen
        name="ShortListed"
        component={secondaryStackNavigator}
        options={{
          tabBarIcon: () => <Ionicons name="md-heart" size={22} />,
        }}
      />
    </Tab.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarVisible: false }}>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Auth" component={AuthScreen} />
      <Tab.Screen name="Main" component={secondaryTabNavigator} />
    </Tab.Navigator>
  );
};

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};
