import { Image } from 'expo-image';
import { Alert, StyleSheet, Text } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedButton } from '@/components/themed-button';
import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/splash-banner.jpg')}
          style={styles.splashBanner}
        />
      }>
        <ThemedText type="splash" style={styles.titleContainer}>
          You'll find {"\n"}
          <Text style={styles.titleColor}>All you need</Text> {"\n"}
          Here!
        </ThemedText>
        <ThemedButton onPress={() => Alert.alert('Sign up button pressed')}>
          Sign Up
        </ThemedButton>
        <ThemedButton type="transparent" onPress={() => Alert.alert('Log in button pressed')}>
          Log In
        </ThemedButton>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
  splashBanner: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
