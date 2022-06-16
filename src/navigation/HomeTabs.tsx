import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomTabBar from './Components/CustomTabBar';
import Home from '../screens/Home';
import {headerLeft, headerRight} from './Components/Header';

export type HomeTabParamList = {
  Home: undefined;

};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const renderTabBar = (props: BottomTabBarProps) => <CustomTabBar {...props} />;

const options = {
  title: 'Watch Pro',
  headerTitleAlign: 'center',
  headerLeft,
  headerRight,
  drawerLabel: () => null,
  drawerItemStyle: {height: 0},
};

function HomeTabs() {
  // eslint-disable-next-line no-unused-expressions
  return (
    <Tab.Navigator
      screenOptions={{tabBarHideOnKeyboard: true, ...options}}
      tabBar={renderTabBar}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
