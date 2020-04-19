import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { AsyncStorage } from "react-native";
import axios from "axios";

export default async () => {
  let previousToken = await AsyncStorage.getItem("pushtoken");
  console.log(previousToken);
  if (previousToken) {
    return;
  } else {
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== "granted") {
      return;
    }
    let token = Notifications.getExpoPushTokenAsync();
    await axios.post(`http://rallycoding.herokuapp.com/api/tokens`, {
      token: { token },
    });
    AsyncStorage.setItem("pushtoken", token);
  }
};
