import { Divider } from '@/components/divider';
import Form, { Field } from '@/components/forms/form';
import { ThemedButton } from '@/components/themed-button';
import { ThemedText } from '@/components/themed-text';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';


export default function LoginScreen() {
  const router = useRouter();

  const fields: Field[] = [
    { type: 'text' ,name: 'email', label: 'Email', placeholder: 'Enter your email' },
    { type: 'text', name: 'password', label: 'Password', placeholder: 'Enter password', secureTextEntry: true },
  ];

  const handleSubmit = (values: { [key: string]: string | boolean }) => {
    Alert.alert('Form submitted', JSON.stringify(values, null, 2))
  };

  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Sign In' }} />

      <View style={{flex: 1}}>
        <Form fields={fields} onSubmit={handleSubmit} buttonLabel="Sign In"/>
        <View style={styles.googleContainer}>
          <Divider 
            text="Or sign up with" 
            lineColor="#dadada" 
            textColor="#4f63ac"
            textWeight="600"
            width="80%" 
            marginVertical={30} 
          />
          <ThemedButton
            style={{ width: 142 }}
            type='dark' 
            title={
              <Fontisto name="google" size={28} />
            } 
            onPress={() => Alert.alert('Google signin')} 
          />
        </View>
        <View style={styles.signinFooter}>
          <ThemedText>
            Don't have an account?
          </ThemedText>
          <ThemedButton
            style={{paddingLeft: 5}}
            titleStyle={{fontSize: 14, fontWeight: 700}}
            type='transparent' 
            title='Sign up'
            onPress={() => router.push('/signup')}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  googleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinFooter: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0, 
  },
})