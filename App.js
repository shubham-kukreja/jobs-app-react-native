import React, { useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { MainNavigator } from "./navigation/MainNavigator";

import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./store/reducers/authReducer";

import RegisterForNotifications from "./services/push_notification";
import { Notifications } from "expo";

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default function App() {
  useEffect(() => {
    RegisterForNotifications();
    Notifications.addListener((notification) => {
      const {
        data: { text },
        origin,
      } = notification;
      if (origin === "received" && text) {
        Alert.alert("New Push Notification", text, [{ text: "Ok" }]);
      }
    });
  });
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
