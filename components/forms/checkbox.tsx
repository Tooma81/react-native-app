import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CheckboxProps {
  label: string | React.ReactNode;
  value: boolean;
}

export default function CheckboxField({
  label,
}: CheckboxProps) {

  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.checkboxContainer}>
      <Checkbox 
        style={styles.checkbox}
        value={isChecked} 
        onValueChange={setChecked}
        color={isChecked ? '#8d9bb5' : undefined}
      />
      <Text style={styles.checkboxLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
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