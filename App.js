import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//importing screens
import LoginScreen from "./screens/LoginScreen.js";
import ConfirmedScreen from "./screens/ConfirmedScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> N322 Final Project </Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={LoginScreen}
          ></Stack.Screen>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Confirmed"
            component={ConfirmedScreen}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#254159",
  },
  header: {
    color: "#fff",
    fontSize: 20,
    opacity: 0.3,
  },
});
