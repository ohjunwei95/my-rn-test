import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ScreenContact from '@screens/ScreenContact';
import ScreenContactDetail from "@screens/ScreenContactDetail";



const mainFlow = createStackNavigator({
  Contact: {
    screen: ScreenContact,
    navigationOptions: ({ navigation }) => ({
      headerTitleAlign: 'center',
    })
  },
  ContactDetail: ScreenContactDetail,
});

const App = createAppContainer(mainFlow);

export default () => {
  return <App/>;
};