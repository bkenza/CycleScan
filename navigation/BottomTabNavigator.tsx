import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import ScannerScreen from "../screens/ScannerScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
  TabFiveParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        style: {
          backgroundColor: "#456658",
          shadowColor: "transparent",
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Scanner"
        component={ScannerNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="camera" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-circle-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const HomeStack = createStackNavigator<TabOneParamList>();
const SignInStack = createStackNavigator<TabThreeParamList>();
const SignUpStack = createStackNavigator<TabFourParamList>();
const ProfileStack = createStackNavigator<TabFiveParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: "#FFFBF4",
            shadowColor: "transparent",
          },
        }}
      />
      <SignInStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerTitle: "Sign In",
          headerStyle: {
            backgroundColor: "#456658",
            shadowColor: "transparent",
          },
        }}
      />
      <SignUpStack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerTitle: "Sign Up",
          headerStyle: {
            backgroundColor: "#456658",
            shadowColor: "transparent",
          },
        }}
      />
    </HomeStack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerTitle: "Profile",
        headerStyle: {
          backgroundColor: "#456658",
          shadowColor: "transparent",
        },
      }}
    />
  );
}

const ScannerStack = createStackNavigator<TabTwoParamList>();

function ScannerNavigator() {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          headerTitle: "Scanner",
          headerStyle: {
            backgroundColor: "#456658",
            shadowColor: "transparent",
          },
        }}
      />
    </ScannerStack.Navigator>
  );
}

function SignInNavigator() {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerTitle: "Sign In",
          headerStyle: {
            backgroundColor: "#456658",
            shadowColor: "transparent",
          },
        }}
      />
    </SignInStack.Navigator>
  );
}
