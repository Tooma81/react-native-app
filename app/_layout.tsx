import { Stack } from 'expo-router';
import React from 'react';
import 'react-native-reanimated';

export default function RootLayout() {
  
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#fff',
    },
    headerTintColor: '#4f63ac',
    headerShadowVisible: false,
    headerTitleStyle: {
      color: '#4f63ac',
      fontFamily: 'Montserrat-Regular',
      fontSize: 26,
      fontWeight: 600,
    },
    contentStyle: {
      backgroundColor: '#fff',
    }
  }} />
}
