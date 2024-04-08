import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function RedBox() {
  return (
    <View style={{ height: 100, width: 100, backgroundColor: "red" }}></View>
  );
}

function BlueBox() {
  return (
    <View
      style={{ height: 100, width: 100, backgroundColor: "blue", flex: 1 }}
    ></View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <RedBox></RedBox>
      <BlueBox></BlueBox>
      <RedBox></RedBox>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: "purple",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
