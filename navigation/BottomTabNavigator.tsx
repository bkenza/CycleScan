import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import HomeScreen from "../screens/HomeScreen";
import ScannerScreen from "../screens/ScannerScreen";
<<<<<<< Updated upstream
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";
=======
import SignInScreen from "../screens/SignInScreen";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
} from "../types";
>>>>>>> Stashed changes

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
<<<<<<< Updated upstream
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
=======
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        style: {
          backgroundColor: "#456658",
          shadowColor: "transparent",
        },
      }}
>>>>>>> Stashed changes
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

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
<<<<<<< Updated upstream
        options={{ headerTitle: "CycleScan" }}
=======
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
>>>>>>> Stashed changes
      />
    </HomeStack.Navigator>
  );
}

const ScannerStack = createStackNavigator<TabTwoParamList>();

function ScannerNavigator() {
  return (
    <ScannerStack.Navigator>
      <ScannerStack.Screen
        name="Scanner"
        component={ScannerScreen}
<<<<<<< Updated upstream
        options={{ headerTitle: "Scanner" }}
=======
        options={{
          headerTitle: "Scanner",
          headerStyle: {
            backgroundColor: "#456658",
            shadowColor: "transparent",
          },
        }}
>>>>>>> Stashed changes
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
