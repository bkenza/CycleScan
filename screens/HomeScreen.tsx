import React, { useState, useEffect } from "react";
import { StyleSheet, Button, TouchableOpacity, Image } from "react-native";
import { Text, View } from "../components/Themed";
import AppLoading from "expo-app-loading";
import { useFonts, YesevaOne_400Regular } from "@expo-google-fonts/yeseva-one";

export default function HomeScreen(props: { navigation: any }) {
  let { navigation } = props;

  let [fontsLoaded] = useFonts({
    YesevaOne_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            <Text style={styles.titleOne}>Cycle</Text>
            <Text style={styles.titleTwo}>Scan</Text>
          </Text>
          <Text style={styles.fillerText}>
            Need help determining if an {"\n"}item is recyclable?
          </Text>
          <TouchableOpacity>
            <View style={styles.scanButtonContainer}>
              <Button
                title="Scan"
                color="#FFFBF4"
                onPress={() => navigation.navigate("Scanner")}
              ></Button>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/background.jpg")}
            style={styles.img}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFBF4",
    display: "flex",
    flexDirection: "column",
  },
  textContainer: {
    width: "100%",
    height: "55%",
    backgroundColor: "#FFFBF4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 65,
    fontFamily: "YesevaOne_400Regular",
    textAlign: "center",
    marginBottom: 5,
    marginTop: "auto",
  },
  titleOne: {
    color: "#456658",
  },
  titleTwo: {
    color: "#9FC991",
  },
  scanButtonContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#84B286",
    borderRadius: 100,
    fontSize: 18,
    width: 160,
    height: 46,
    fontWeight: "bold",
    color: "#FFFBF4",
  },
  imageContainer: {
    width: "100%",
    height: "45%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  fillerText: {
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
});
