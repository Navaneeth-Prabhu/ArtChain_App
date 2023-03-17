import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import BidScreen from '../components/BidScreen';
import SuccessScreen from '../screens/SuccessScreen';
import BuyScreen from '../screens/BuyScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen  name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}/>
    <Stack.Screen  name="Tab"
      component={Tab}
      options={{ headerShown: false }}/>
   </Stack.Navigator>
  )
}
const ProductStack = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen  name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}/>
    <Stack.Screen  name="Detail"
      component={DetailScreen}
      options={{ headerShown: false }}/>
    <Stack.Screen  name="Bid"
      component={BidScreen}
      options={{ headerShown: false }}/>
    <Stack.Screen  name="Buy"
      component={BuyScreen}
      options={{ headerShown: false }}/>
    <Stack.Screen  name="Success"
      component={SuccessScreen}
      options={{ headerShown: false }}/>
   </Stack.Navigator>
  )
}

export  {MainStack,ProductStack}