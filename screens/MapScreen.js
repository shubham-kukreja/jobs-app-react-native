import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import * as jobActions from "../store/actions/job_actions";
import { Button } from "react-native-elements";

class MapScreen extends Component {
  state = {
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09,
    },
  };
  onRegionChangeComplete = (region) => {
    this.setState(region);
  };
  onButtonPress = () => {
    // console.log(this.props);
    // this.props.fetchJobs(this.state.region);
    this.props.navigation.navigate("Deck")
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1 }}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Search Here"
            icon={{ name: "search", color: "white" }}
            containerStyle={{ flex : 1 }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 25,
    left: 0,
    right: 0,
    borderRadius : 150,
    padding : 10,
    alignItems : 'center'
  },
});
export default connect(null, jobActions)(MapScreen);
