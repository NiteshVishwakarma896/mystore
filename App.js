/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import MainTabScreen from './src/screens/MainTabScreen';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(()=>{
    SplashScreen.hide();
  },[]);
  return (
    <NavigationContainer>
      <MainTabScreen />
    </NavigationContainer>
  );
}
