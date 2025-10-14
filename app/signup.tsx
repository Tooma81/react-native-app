import { Divider } from '@/components/divider';
import Form, { Field } from '@/components/forms/form';
import { ThemedButton } from '@/components/themed-button';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Stack } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function SignupScreen() {

  const fields: Field[] = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
    { name: 'email', label: 'Email', type: 'text', placeholder: 'Enter your email' },
    { name: 'password', label: 'Password', type: 'text', placeholder: 'Enter password', secureTextEntry: true },
    { 
      name: 'Terms', 
      label: (
      <Text>
        I agree with <Text style={{ fontWeight: 700 }}>Terms</Text> & <Text style={{ fontWeight: 700 }}>Privacy</Text>
      </Text>
    ), 
      type: 'checkbox'
    },
  ];

  const handleSubmit = (values: { [key: string]: string | boolean }) => {
    Alert.alert('Form submitted', JSON.stringify(values, null, 2))
  };

  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Sign Up' }} />

      <View>
        <Form fields={fields} onSubmit={handleSubmit} buttonLabel="Sign Up"/>
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