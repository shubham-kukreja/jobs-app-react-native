import React, { Component } from "react";
import { Text, View, StyleSheet, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import * as authActions from "../store/actions/auth";

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
    // AsyncStorage.removeItem("fb_token");
  }
  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }
  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate("Main");
    }
  }

  render() {
    return <View/>;
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

const styles = StyleSheet.create({});
export default connect(mapStateToProps, authActions)(AuthScreen);
