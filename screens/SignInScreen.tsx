import React from "react";
import { StyleSheet, Button, TouchableOpacity, Image } from "react-native";
import { Text, View } from "../components/Themed";
import AppLoading from "expo-app-loading";
import { useFonts, YesevaOne_400Regular } from "@expo-google-fonts/yeseva-one";

export default function SignInScreen(props: { navigation: any }) {
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
          <Text style={styles.fillerText}>Sign In Page</Text>
          <View style={styles.signButtons}>
            <TouchableOpacity>
              <View style={styles.signButtonContainer}>
                <Button
                  title="Sign in"
                  color="#FFFBF4"
                  onPress={() => navigation.navigate("Scanner")}
                ></Button>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.signButtonContainer}>
                <Button
                  title="Sign up"
                  color="#FFFBF4"
                  onPress={() => navigation.navigate("Scanner")}
                ></Button>
              </View>
            </TouchableOpacity>
          </View>
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
  signButtons: {
    width: "100%",
    paddingRight: "15%",
    paddingLeft: "15%",
    backgroundColor: "#FFFBF4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  scanButtonContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#456658",
    borderRadius: 100,
    fontSize: 18,
    width: 160,
    height: 50,
    fontWeight: "bold",
    color: "#FFFBF4",
  },
  signButtonContainer: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#84B286",
    borderRadius: 100,
    fontSize: 18,
    width: 131,
    height: 45,
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
    marginTop: 10,
    fontSize: 16,
    color: "#000000",
    textAlign: "center",
  },
});
