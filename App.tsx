/**
 * React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 *
 */

import React from 'react';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import * as material from '@eva-design/eva';
import {EvaIconsPack,} from '@ui-kitten/eva-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen.tsx';
import CardScreen from './src/screens/CardScreen.tsx';




const {Navigator, Screen} = createStackNavigator();

export default function App() {
  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...material} theme={material.light} >
          <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
              <Screen name="HomeScreen" component={HomeScreen} />
              <Screen name="CardDetails" component={CardScreen} />
            </Navigator>
          </NavigationContainer>
      </ApplicationProvider>
    </React.Fragment>
  );
}




