import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "one",
            },
          },
          Scanner: {
            screens: {
              ScannerScreen: "two",
            },
          },
          SignIn: {
            screens: {
              SignInScreen: "three",
            },
          },
          SignUn: {
            screens: {
              SignUpScreen: "four",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "five",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
