import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import DATA from "../data/dummy";
import { Card, Button } from "react-native-elements";
import Deck from "../components/Deck";
import MapView from "react-native-maps";
import * as likeAction from "../store/actions/job_actions";
import { connect } from "react-redux";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class DeckScreen extends Component {
  renderCard(item) {
    return (
      <Card key={item.id} title={item.jobtitle}>
        <View style={styles.card}>
          <View style={styles.cardContainer}>
            <Text style={{ marginBottom: 10 }}>{item.company}</Text>
            <Text style={{ marginBottom: 10 }}>{item.city}</Text>
          </View>
          <View style={{ height: 200 }}>
            <MapView
              scrollEnabled={false}
              style={{ flex: 1 }}
              region={{
                latitude: item.latitude,
                longitude: item.longitude,
                latitudeDelta: 1,
                longitudeDelta: 1,
              }}
            />
          </View>
          <Button backgroundColor="#03A9F4" title="View Now!" />
        </View>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>There's no more content here!</Text>
        <Button backgroundColor="#03A9F4" title="Get more!" />
      </Card>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA.results}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={(job) => this.props.likeJob(job)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
export default connect(null, likeAction)(DeckScreen);
