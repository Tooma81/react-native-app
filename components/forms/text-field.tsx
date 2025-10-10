import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface TextFieldProps {
  label: string | React.ReactNode;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export default function TextField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}: TextFieldProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { 
    marginBottom: 5, 
    color: '#4f63ac',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: 500, 
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    fontWeight: 500, 
  },
});
