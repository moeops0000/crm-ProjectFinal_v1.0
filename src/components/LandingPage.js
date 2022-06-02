import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";

const image = { uri: "https://cdn.pixabay.com/photo/2017/01/18/13/10/galaxy-soho-1989816_960_720.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>CRM APP</Text>
      <Image source={require('../images/LogoNorm1.png')} />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "black",
    fontSize: 35,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#c64c38"
  }
});

export default App;
