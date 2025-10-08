import Form from '@/components/forms/form';
import { Stack } from 'expo-router';
import React from 'react';
import { Alert, View } from 'react-native';

export default function SignupScreen() {

  const fields = [
    { name: 'name', label: 'Name', placeholder: 'Enter your name' },
    { name: 'email', label: 'Email', placeholder: 'Enter your email' },
    { name: 'password', label: 'Password', placeholder: 'Enter password', secureTextEntry: true },
  ];

  const handleSubmit = (values: { [key: string]: string }) => {
    Alert.alert('Form submitted', JSON.stringify(values, null, 2))
  };

  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Sign Up' }} />

      <View>
        <Form fields={fields} onSubmit={handleSubmit} buttonLabel="Sign Up"/>
      </View>
    </>
  );
}