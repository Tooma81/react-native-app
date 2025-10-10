import { ThemedButton } from '@/components/themed-button';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CheckboxField from './checkbox';
import TextField from './text-field';

export interface Field {
  type: 'text' | 'checkbox';
  name: string;
  label: string | React.ReactNode;
  placeholder?: string;
  secureTextEntry?: boolean;
}

interface FormProps {
  fields: Field[];
  onSubmit: (values: { [key:string]: string | boolean }) => void;
  buttonLabel?: string;
}

export default function Form({
  fields,
  onSubmit,
  buttonLabel = 'Submit',
}: FormProps) {

  const [values, setValues] = useState<{ [key: string]: string | boolean }>(
    Object.fromEntries(fields.map(field => [field.name, field.type === 'checkbox' ? false : '']))
  )

  const handleChange = (name: string, value: string | boolean) => {
    setValues(prev => ({ ...prev, [name]: value}))
  };

  return (
    <View style={styles.formBase}>
      {fields.map((field) => (
        <React.Fragment key={field.name}>
          {field.type === 'checkbox' ? (
            <CheckboxField 
              key={field.name}
              label={field.label} 
              value={values[field.name] as boolean}
            />
          ) : (
            <TextField
              key={field.name}
              label={field.label}
              placeholder={field.placeholder}
              secureTextEntry={field.secureTextEntry}
              value={values[field.name] as string}
              onChangeText={(text) => handleChange(field.name, text)}
            />
          )}
        </React.Fragment>
      ))}
      <ThemedButton title={buttonLabel} onPress={() => onSubmit(values)} />
    </View>
  );
}

const styles = StyleSheet.create({
  formBase: {
    padding: 20,
  },
});
