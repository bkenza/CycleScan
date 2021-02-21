import React from "react";
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Text, View } from "../components/Themed";
import AppLoading from "expo-app-loading";
import { useFonts, YesevaOne_400Regular } from "@expo-google-fonts/yeseva-one";

export default function ProfileScreen(props: { navigation: any }) {
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
          <Text style={styles.fillerText}>Sustainability</Text>
          <Text style={styles.fillerText}>Profile Page</Text>
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
    height: "75%",
    backgroundColor: "#FFFBF4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 55,
    fontFamily: "YesevaOne_400Regular",
    marginTop: "auto",
  },
  titleOne: {
    color: "#456658",
  },
  titleTwo: {
    color: "#9FC991",
  },
  imageContainer: {
    width: "100%",
    height: "25%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  fillerText: {
    marginTop: 2,
    fontSize: 14,
    color: "#969696",
    textAlign: "center",
  },
});
