import Form, { Field } from '@/components/forms/form';
import { Stack } from 'expo-router';
import React from 'react';
import { Alert, View } from 'react-native';


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
      </View>
    </>
  );
}