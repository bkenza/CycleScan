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
          <Image
            source={require("../assets/images/Account.png")}
            style={styles.accountImg}
          />
          <Text style={styles.fillerText}>Signed in as:</Text>
          <Text style={styles.fillerTextTwo}>someone@somewhere.com</Text>
          <View style={styles.scanButtonContainer}>
            <Button title="Level 2" color="#FFFBF4"></Button>
          </View>
          <Text style={styles.Descriptions}>
            <Text style={styles.DescriptionsOne}>
              Number of Recycled Objects:
            </Text>
            <Text style={styles.DescriptionsTwo}> 25</Text>
          </Text>
          <Text style={styles.badges}>Badges</Text>
          <View style={styles.badge}>
            <Image
              source={require("../assets/images/Paper.png")}
              style={styles.badgeImg}
            />
            <Text style={styles.DescriptionsOne}>
              Congrats, you received one object!
            </Text>
          </View>
          <View style={styles.badge}>
            <Image
              source={require("../assets/images/Recycle.png")}
              style={styles.badgeImg}
            />
            <Text style={styles.DescriptionsOne}>
              Congrats, you recycled 10 objects!
            </Text>
          </View>
          <View style={styles.badge}>
            <Image
              source={require("../assets/images/Globe.png")}
              style={styles.badgeImg}
            />
            <Text style={styles.DescriptionsOne}>Recycle 100 objects!</Text>
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
    height: "85%",
    backgroundColor: "#FFFBF4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "18%",
  },
  badge: {
    width: "100%",
    backgroundColor: "#FFFBF4",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5%",
  },
  badgeImg: {
    width: 43,
    height: 40,
    marginRight: 15,
  },
  accountImg: {
    width: 140,
    height: 140,
  },
  title: {
    fontSize: 55,
    fontFamily: "YesevaOne_400Regular",
  },
  titleOne: {
    color: "#456658",
  },
  titleTwo: {
    color: "#9FC991",
  },
  imageContainer: {
    width: "100%",
    height: "15%",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  fillerText: {
    marginTop: 15,
    fontSize: 18,
    color: "#456658",
    textAlign: "center",
  },
  fillerTextTwo: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: "bold",
    color: "#456658",
    textAlign: "center",
  },
  badges: {
    marginTop: "18%",
    fontSize: 15,
    color: "#456658",
    textAlign: "center",
    marginBottom: "4%",
  },
  Descriptions: {
    marginTop: 2,
    fontSize: 18,
    color: "#456658",
    textAlign: "center",
  },
  DescriptionsOne: {
    marginTop: 2,
    fontSize: 18,
    color: "#456658",
    textAlign: "center",
  },
  DescriptionsTwo: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: "bold",
    color: "#456658",
    textAlign: "center",
  },
  scanButtonContainer: {
    marginTop: 15,
    marginBottom: "7%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9FC991",
    borderRadius: 100,
    fontSize: 18,
    width: 160,
    height: 46,
    fontWeight: "bold",
    color: "#FFFBF4",
  },
});
