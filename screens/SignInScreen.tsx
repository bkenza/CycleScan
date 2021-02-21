import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Keyboard
} from "react-native";
import { Text, View } from "../components/Themed";
import AppLoading from "expo-app-loading";
import { Signin } from '../utils/auth';
import { useFonts, YesevaOne_400Regular } from "@expo-google-fonts/yeseva-one";

export default function SignInScreen(props: { navigation: any }) {
  let { navigation } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let [fontsLoaded] = useFonts({
    YesevaOne_400Regular,
  });

  /**
   * Function that uses the user input (email, password) to log users in via firebase
   */
  const handleSignIn = async (e) => {
    try {
      await Signin(email, password);
      navigation.navigate("Scanner");
      Keyboard.dismiss();
    } catch (e) {
      console.log(e);
      Alert.alert(e.toString())
    }
  }

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
          <View style={styles.inputsContainer}>
            <TextInput
              clearTextOnFocus={true}
              style={styles.inputSpace}
              textContentType='emailAddress'
              placeholderTextColor='#9FC991'
              placeholder='Email'
              value={email}
              onChangeText={(em) => { setEmail(em) }} />
            <TextInput
              clearTextOnFocus={true}
              style={styles.inputSpace}
              secureTextEntry={true}
              textContentType='password'
              placeholderTextColor='#9FC991'
              placeholder='Password'
              value={password}
              onChangeText={(pass) => { setPassword(pass) }} />
          </View>
          <TouchableOpacity>
            <View style={styles.scanButtonContainer}>
              <Button
                title="Sign In"
                color="#FFFBF4"
                onPress={handleSignIn}
              ></Button>
            </View>
          </TouchableOpacity>
          <Text style={styles.toSignUp}>
            <Text style={styles.toSignUpOne}>Don't have an account? </Text>
            <Text style={styles.toSignUpTwo} onPress={() => navigation.navigate("SignUp")}>Register!</Text>
          </Text>
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
  inputsContainer: {
    width: "100%",
    display: "flex",
    backgroundColor: "#FFFBF4",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
  },
  inputSpace: {
    width: "85%",
    height: 60,
    marginBottom: 20,
    color: "#9FC991",
    borderBottomColor: "#9FC991",
    borderBottomWidth: 1.5,
  },
  scanButtonContainer: {
    marginTop: 30,
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
  toSignUp: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 45,
  },
  toSignUpOne: {
    color: "#000000",
  },
  toSignUpTwo: {
    color: "#209E81",
  },
});
