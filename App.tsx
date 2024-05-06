import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function RedBox() {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: "red",
      }}
    ></View>
  );
}

function BlueBox() {
  return (
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: "blue",
      }}
    ></View>
  );
}

function GreenBox() {
  return (
    <View style={{ height: 100, width: 100, backgroundColor: "green" }}></View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <RedBox></RedBox>
      <BlueBox></BlueBox>
      <GreenBox></GreenBox>
      <BlueBox></BlueBox>
      <GreenBox></GreenBox>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    alignContent: "flex-start",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderWidth: 5,
    borderColor: "purple",
    backgroundColor: "#fff",
  },
});
