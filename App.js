
import React from 'react';
import { Platform, StatusBar,View } from 'react-native';
import * as appcolors from './src/utils/colors';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import configureStore from './src/store';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './AppRouter';
import NavigationService from './src/utils/navigation'
import FlashMessage from 'react-native-flash-message';
import PushNotification from 'react-native-push-notification'
const { store, persistor } = configureStore();

const App = () => {
 
 
  return (
    <NavigationContainer
     ref={navigationRef =>
     NavigationService.setTopLevelNavigator(navigationRef)
    } >
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          {/* <StatusBar barStyle="dark-content" backgroundColor={'transparent'} translucent={true} /> */}
          <StatusBar barStyle="light-content" backgroundColor={appcolors.primary} />
            <View style ={{flex:1}}>
             
            <AppRouter />
            <FlashMessage position="top" />
            </View>
           

          </PersistGate>

        </Provider>

      </SafeAreaProvider>

    </NavigationContainer>
  )

}

export default App;


// push notification
// https://dev.to/botreetechnologies/how-to-scheduled-push-notification-with-firebase-in-react-native-3hcf