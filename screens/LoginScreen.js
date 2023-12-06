//importing React
import { useState } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper";

//importing Firebase
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//importing utils
import { buttons } from "../utils/utils";

export default function LoginScreen({ navigation }) {
  const [signinEmail, setSignInEmail] = useState();
  const [signinPassword, setSignInPassword] = useState();
  const [createFirstName, setCreateFirstName] = useState();

  //create user function

  //login function

  return (
    <ImageBackground
      source={require("../assets/app-hero.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to the US Bank Application!</Text>
        <Text style={styles.subHeader}> Please login in here.</Text>
        <TextInput style={styles.input} label="Enter Email"></TextInput>
        <TextInput style={styles.input} label="Enter Password"></TextInput>
        <Button
          style={buttons}
          mode="contained"
          onPress={() => {
            navigation.navigate("Confirmed");
          }}
        >
          Login
        </Button>

        <Text style={styles.subHeader}> New? Create an account here.</Text>
        <TextInput style={styles.input} label="Enter Name"></TextInput>
        <TextInput style={styles.input} label="Create Password"></TextInput>
        <Button
          style={buttons}
          mode="contained"
          onPress={() => {
            navigation.navigate("Confirmed");
          }}
        >
          Create Account
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    //marginTop: 50,
    padding: 30,
  },
  header: {
    color: "#121D26",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  subHeader: {
    color: "#f2f2f2",
    backgroundColor: "#254159",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#CEDEF2",
  },
});
