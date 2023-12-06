//import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

//importing utils
import { buttons } from "../utils/utils";

export default function ConfirmedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thank you for logging in! </Text>
      <Text style={styles.subHeader}> What would you like to do next? </Text>
      <Button
        style={buttons}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        Go back
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: 30,
  },
  header: {
    color: "#121D26",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  subHeader: {
    color: "#121D26",
    fontSize: 18,
    textAlign: "center",
  },
});
