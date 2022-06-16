import React from 'react';
import {View, Text} from 'native-base';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation';
import {DrawerParamList} from '../../navigation/DrawerMenu';

export type RootNavigationType = NativeStackNavigationProp<
  RootStackParamList,
  any
>;
export type DrawerNavigationType = DrawerNavigationProp<DrawerParamList, any>;

function SinglePost() {
  return (
    <View flex={1} justifyContent="center" alignItems="center">
      <Text>Home</Text>
    </View>
  );
}

export default SinglePost;
