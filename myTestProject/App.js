import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ScreenContact from '@screens/ScreenContact';
import ScreenContactDetail from "@screens/ScreenContactDetail";
import Icon from 'react-native-vector-icons/AntDesign';
import { StyleConstant } from '@assets/json/MyStyle';




const mainFlow = createStackNavigator({
  Contact: {
    screen: ScreenContact,
    navigationOptions: ({ navigation }) => ({
      headerTitleAlign: 'center',
      title: 'Contacts',
      headerLeft: () => (
        <Icon name="search1" size={30} style={{ marginHorizontal: 10 }} color={StyleConstant.orange} />
      ),
      headerRight: () => (
        <Icon name="plus" size={30} style={{ marginHorizontal: 10 }} color={StyleConstant.orange} />
      ),
    })
  },
  ContactDetail: ScreenContactDetail,
});

const App = createAppContainer(mainFlow);

export default () => {
  return <App/>;
};