import { FACEBOOK_LOGIN_SUCESS, FACEBOOK_LOGIN_FAIL } from "./types";
import { AsyncStorage } from "react-native";
import * as Facebook from "expo-facebook";

export const facebookLogin = () => async (dispatch) => {
  let token = await AsyncStorage.getItem("fb_token");
  if (token) {
    dispatch({ type: FACEBOOK_LOGIN_SUCESS, payload: token });
  } else {
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async (dispatch) => {
  await Facebook.initializeAsync("1618016388356395");
  let { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ["public_profile"],
  });
  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }
  await AsyncStorage.setItem("fb_token", token);
  dispatch({ type: FACEBOOK_LOGIN_SUCESS, payload: token });
};
