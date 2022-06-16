/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider as StoreProvider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import NavContainer from './src/navigation';
import {theme} from './src/theme';
import {ConfirmModalProvider} from './src/components/CofirmationModel';
import {persistor, store} from './src/redux/store';
import ImageGallery from './src/components/ImageGallery';
// NOTE: hiding warnings about color contrasts
LogBox.ignoreLogs(['NativeBase: The contrast ratio of']);

const queryClient = new QueryClient();


function App(): JSX.Element {
 


  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle="dark-content" />
          <SafeAreaProvider>
            <NativeBaseProvider theme={theme}>
              <ConfirmModalProvider>
                <StatusBar translucent backgroundColor="transparent" />
                <NavContainer />
              </ConfirmModalProvider>
            </NativeBaseProvider>
          </SafeAreaProvider>
        </QueryClientProvider>
      </PersistGate>
      <FlashMessage position="top" statusBarHeight={StatusBar.currentHeight} />
    </StoreProvider>
  );
}

export default App;
