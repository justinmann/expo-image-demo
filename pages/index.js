import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const PlaceholderImage = require("./background-image.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={PlaceholderImage} style={styles.image} />
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
