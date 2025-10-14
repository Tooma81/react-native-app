import { Checkbox } from 'expo-checkbox';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CheckboxProps {
  label: string | React.ReactNode;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

export default function CheckboxField({
  label,
  value,
  onValueChange,
}: CheckboxProps) {

  return (
    <View style={styles.checkboxContainer}>
      <Checkbox 
        style={styles.checkbox}
        value={value} 
        onValueChange={onValueChange}
        color={value ? '#8d9bb5' : undefined}
      />
      <Text style={styles.checkboxLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  checkbox: {
    height: 22,
    width: 22,
    marginRight: 10,
  },
  checkboxLabel: {
    color: '#4f63ac',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
})