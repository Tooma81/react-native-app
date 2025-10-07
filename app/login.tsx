import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Log In' }} />

      <View>
        <Text>Login Page</Text>
      </View>
    </>
  );
}