import { Image } from 'expo-image';
import { Alert, StyleSheet, Text, View } from 'react-native';

import { ThemedButton } from '@/components/themed-button';
import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  return (
    <View style={styles.splashContainer}>
      <Image
        source={require('@/assets/images/splash-banner.jpg')}
        style={styles.splashBanner}
        resizeMode="contain"
      />
      <ThemedText type="splash" style={styles.titleContainer}>
        You'll find {"\n"}
        <Text style={styles.titleColor}>All you need</Text> {"\n"}
        Here!
      </ThemedText>
      <View style={styles.splashButton}>
        <ThemedButton onPress={() => Alert.alert('Sign up button pressed')}>
          Sign Up
        </ThemedButton>
        <ThemedButton type="transparent" onPress={() => Alert.alert('Log in button pressed')}>
          Log In
        </ThemedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
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
  splashBanner: {
    width: '100%',
    height: 300,
  },
  splashButton: {
    width: '80%',
    alignSelf: 'center',
  },
});
