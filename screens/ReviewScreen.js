import React, { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Card, Button } from "react-native-elements";
import MapView from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";

const ReviewScreen = (props) => {
  const likedJobs = useSelector((state) => state.likedJobs.likedJobs);
  const onClear = () => {
    console.log("JI");
  };
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Button
          type="clear"
          icon={{ name: "settings" }}
          onPress={() => props.navigation.navigate("Settings")}
        />
      ),
    });
  }, [props.navigation]);
  return (
    <ScrollView>
      {likedJobs.length ? (
        likedJobs.map((item) => (
          <Card key={item.id} title={item.jobtitle}>
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
          </Card>
        ))
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Selected Jobs</Text>
          <Text>Swipe Right On a Job to mark selected.</Text>
        </View>
      )}
      {}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
export default ReviewScreen;
