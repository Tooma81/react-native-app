import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {
  const fonts = useFonts({
    'Montserrat-Regular': require('@/assets/fonts/Montserrat-Regular.ttf'),
  });
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
