import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Emoji from "react-native-emoji";
import TextField from "./src/components/TextField";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Emoji name="wave" style={{ fontSize: 50, marginRight: 10 }} />
        Ravis de vous revoir ! Connectez-vous à votre espace
      </Text>
      <View style={{ marginTop: 10 }}>
        <TextField placeholder="Votre email" />
        <TextField password style={{ marginTop: 10 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
