//importing React
import { useState } from "react";
import { Text, View, StyleSheet, ImageBackground, Alert } from "react-native";
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
  //login consts
  const [signInEmail, setSignInEmail] = useState();
  const [signInPassword, setSignInPassword] = useState();

  //create consts
  const [createFullName, setCreateFullName] = useState();
  const [createEmail, setCreateEmail] = useState();
  const [createPassword, setCreatePassword] = useState();

  //create user function
  const createNewUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, createEmail, createPassword)
        .then((userCredential) => {
          setCreateFullName("");
          setCreateEmail("");
          setCreatePassword("");
          navigation.navigate("Confirmed");
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    } catch (error) {
      console.log("Error with try attempt: ", error.message);
    }
  };

  //login function
  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword)
        .then((userCredential) => {
          setSignInEmail("");
          setSignInPassword("");
          navigation.navigate("Confirmed");
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    } catch (error) {
      console.log("Error with try attempt: ", error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/app-hero.jpeg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to the US Bank Application!</Text>
        <Text style={styles.subHeader}> Please login in here.</Text>
        <TextInput
          style={styles.input}
          label="Enter Email"
          onChangeText={setSignInEmail}
          value={signInEmail}
        ></TextInput>
        <TextInput
          style={styles.input}
          label="Enter Password"
          onChangeText={setSignInPassword}
          value={signInPassword}
        ></TextInput>
        <Button style={buttons} mode="contained" onPress={loginUser}>
          Login
        </Button>

        <Text style={styles.subHeader}> New? Create an account here.</Text>
        <TextInput
          style={styles.input}
          label="Enter Full Name"
          onChangeText={setCreateFullName}
          value={createFullName}
        ></TextInput>
        <TextInput
          style={styles.input}
          label="Enter Email"
          onChangeText={setCreateEmail}
          value={createEmail}
        ></TextInput>
        <TextInput
          style={styles.input}
          label="Create Password"
          onChangeText={setCreatePassword}
          value={createPassword}
        ></TextInput>
        <Button style={buttons} onPress={createNewUser}>
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
