import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-reanimated';


export const unstable_settings = {
  anchor: '(tabs)',
};



export default function RootLayout() {

const fonts = useFonts({
  'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
  'Montserrat-Bold': require('@/assets/fonts/Montserrat-Bold.ttf'),
  'NunitoSans-Regular': require('@/assets/fonts/NunitoSans-Regular.ttf'),
  'NunitoSans-Bold': require('@/assets/fonts/NunitoSans-Bold.ttf'),
  'Gelasio-Regular': require('@/assets/fonts/Gelasio-Regular.ttf'),
});

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>

      <StatusBar style="dark" />
    </>
  );
}