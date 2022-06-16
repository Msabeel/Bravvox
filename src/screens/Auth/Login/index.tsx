import React from 'react';
import {Text, View} from 'native-base';
import {StyleSheet, ImageBackground} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../../assets/images';
import {theme} from '../../../theme';

// type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

function Login() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <View flex={1} justifyContent="center" alignItems="center">
          <Text>Login</Text>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  safeAreaView: {
    flexGrow: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
