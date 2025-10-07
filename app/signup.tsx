import { Stack } from 'expo-router';
import { Text, View } from 'react-native';

export default function SignupScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Sign Up' }} />
      
      <View>
        <Text>Signup Page</Text>
      </View>
    </>
  );
}