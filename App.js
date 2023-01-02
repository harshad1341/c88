
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/Register";

import * as firebase from "firebase";
import { firebaseConfig } from "./screens/config";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}