import { Divider } from '@/components/divider';
import Form, { Field } from '@/components/forms/form';
import { ThemedButton } from '@/components/themed-button';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Stack } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';


export default function LoginScreen() {

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

      <View>
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
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  googleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})