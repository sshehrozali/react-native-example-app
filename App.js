import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.main}>Wohooo! This is my First Mobile App! 😎</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c21",
    alignItems: "center",
    justifyContent: "center",
  },

  main: {
    color: "#fff",
    fontSize: "25px",
  },
});
