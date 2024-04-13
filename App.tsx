import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

const changeScreenOrientation = async () => {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
  );
};

export default function App() {
  useEffect(() => {
    const execChangeScreenOrientation = async () => {
      await changeScreenOrientation();
    };
    execChangeScreenOrientation();
  }, []);

  return (
    <View style={styles.badgeStyle}>
      <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
        <Text style={styles.welcomeText}>Hello 你好</Text>
        <Text style={styles.subtitleText}>my name is 我叫</Text>
        <View style={styles.nestedContainer}>
          <Text style={styles.nestedText}>Bobby (He/Him)</Text>
          <Text style={styles.nestedText}>刘入名</Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
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
  badgeStyle: {
    flex: 1,
    backgroundColor: "rgb(255,0,0)",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 70,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "rgb(255,255,255)",
    textAlign: "center",
  },
  subtitleText: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },

  // Nested Container Style //
  nestedContainer: {
    width: "100%",
    height: "55%",
    backgroundColor: "rgb(255,255,255)",
    borderRadius: 5,
    justifyContent: "center",
  },
  nestedText: {
    fontSize: 60,
    textAlign: "center",
    fontWeight: "bold",
  },
});
