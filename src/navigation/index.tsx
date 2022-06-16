import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RNBootSplash from 'react-native-bootsplash';

import Login from '../screens/Auth/Login';
import {navTheme} from '../theme';

import DrawerMenu from './DrawerMenu';
import useUserInfo from '../hooks/useUserInfo';
import {navigationRef} from './navigationRef';
import HomeTabs from './HomeTabs';

export type RootStackParamList = {
  HomeTabs: undefined;
  Login: undefined;
  DrawerMenu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function NavContainer() {
  const {isLoggedIn} = useUserInfo();


  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const hideSplasScreen = () => {
    RNBootSplash.hide({fade: true});
  };

  return (
    <NavigationContainer
      theme={navTheme}
      independent
      ref={navigationRef}
      onReady={hideSplasScreen}>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{headerShown: false}}>
            <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavContainer;
