import React from "react";
import { View, Text, StyleSheet, Dimensions, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Screen_width = Dimensions.get("window").width;

const Slides = (props) => {
  return (
    <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
      {props.data.map((slide) => {
        return (
          <View key={slide.text} style={styles.slide}>
            <Text style={styles.slideText}>{slide.text}</Text>
            <Button title="Skip" onPress={props.handlePress} />
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Screen_width,
  },
  slideText: {
    fontSize: 20,
  },
});
export default Slides;
