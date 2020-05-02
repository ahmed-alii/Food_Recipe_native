import React, { Component, useState, useContext, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Button } from "react-native-elements";
import ProfileNavigation from "../navigation/ProfileNavigation";
import UserContext from "../connection/userContext";
import { Provider } from "../Context/FoodContext";
import { UserLogProvider } from "../connection/userLogContext";
import AuthNavigation from "../navigation/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AsyncStorage } from "react-native";

const Stack = createStackNavigator();

export default ScreenChooser = ({ navigation }) => {
  const [loggedIn, setLoggedin] = useState(false);
  const value = { loggedIn, setLoggedin };
  useEffect(() => {
    AsyncStorage.getItem("DataKey").then((value) => {
      console.log("Screenchasyncstorage2");
      console.log("jj" + value);
      console.log(JSON.parse(value).LogStatus);
      setLoggedin(JSON.parse(value).LogStatus);
    });
  });
  if (loggedIn !== true) {
    return (
      <UserContext.Provider value={value}>
        <UserContext.Consumer>
          {({ loggedIn, setLoggedin }) => (
            <View style={styles.container}>
              {Platform.OS === "ios" && <StatusBar barStyle="default" />}
              <UserLogProvider>
                <Provider>
                  {loggedIn === true && <Text>Hello</Text>}
                  <AuthNavigation />
                </Provider>
              </UserLogProvider>
            </View>
          )}
        </UserContext.Consumer>
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={value}>
        <UserContext.Consumer>
          {({ loggedIn, setLoggedin }) => (
            <View style={styles.container}>
              {Platform.OS === "ios" && <StatusBar barStyle="default" />}
              <UserLogProvider>
                <Provider>
                  <ProfileNavigation />
                </Provider>
              </UserLogProvider>
            </View>
          )}
        </UserContext.Consumer>
      </UserContext.Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
