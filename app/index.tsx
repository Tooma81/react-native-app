import { ThemedButton } from '@/components/themed-button';
import { ThemedText } from '@/components/themed-text';
import { useFonts } from 'expo-font';
import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function StartScreen() {
  const router = useRouter();

  const [loaded, error] = useFonts({
    'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('@/assets/fonts/Montserrat-Bold.ttf'),
    'NunitoSans-Regular': require('@/assets/fonts/NunitoSans-Regular.ttf'),
    'NunitoSans-Bold': require('@/assets/fonts/NunitoSans-Bold.ttf'),
    'Gelasio-Regular': require('@/assets/fonts/Gelasio-Regular.ttf'),
  });

  // Hide the splash screen once fonts are loaded or an error occurs
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // Prevent rendering the UI until fonts are ready
  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.homeContainer}>
        <Image
          source={require('@/assets/images/home-banner.jpg')}
          style={styles.homeBanner}
          resizeMode="contain"
        />
        <ThemedText type="home" style={styles.titleContainer}>
          You'll find {"\n"}
          <Text style={styles.titleColor}>All you need</Text> {"\n"}
          Here!
        </ThemedText>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.homeButton}>
          <ThemedButton title="Sign Up" onPress={() => router.push('/signup')} />
          <ThemedButton type="transparent" title="Sign In" onPress={() => router.push('/login')} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    gap: 8,
  },
  titleColor: {
    color: '#fca34d',
    textDecorationLine: 'underline',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  homeBanner: {
    width: '100%',
    height: 300,
  },
  homeButton: {
    width: '80%',
    alignSelf: 'center',
  },
});
