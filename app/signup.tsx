import { Divider } from '@/components/divider';
import Form, { Field } from '@/components/forms/form';
import { ThemedButton } from '@/components/themed-button';
import { ThemedText } from '@/components/themed-text';
import Fontisto from '@expo/vector-icons/Fontisto';
import axios from "axios";
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function SignupScreen() {
  const router = useRouter();

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
    if (values.Terms) {
      if (values.name && values.email && values.password) {
        axios.post('http://192.168.44.8:3000/users', {values}) 
      } else {
        Alert.alert("Please fill all fields.")
      }
    } else {
      Alert.alert("You need to agree to the Terms & Privacy.")
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerTitle: 'Sign Up' }} />

      <View style={{flex: 1, flexDirection: 'column'}}>
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
        <View style={styles.signinFooter}>
          <ThemedText>
            Already have an account?
          </ThemedText>
          <ThemedButton
            style={{paddingLeft: 5}}
            titleStyle={{fontSize: 14, fontWeight: 700}}
            type='transparent' 
            title='Sign in'
            onPress={() => router.push('/login')}
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