import React, { useState } from 'react';
import { Button, View } from 'react-native';
import FormInput from './form-input';

interface Field {
  name: string;
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

interface FormProps {
  fields: Field[];
  onSubmit: (values: { [key:string]: string }) => void;
  buttonLabel?: string;
}

export default function Form({
  fields,
  onSubmit,
  buttonLabel = 'Submit',
}: FormProps) {

  const [values, setValues] = useState(
    Object.fromEntries(fields.map(field => [field.name, '']))
  );

  const handleChange = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value}))
  };

  return (
    <View style={{ padding: 20 }}>
      {fields.map((field) => (
        <FormInput
          key={field.name}
          label={field.label}
          placeholder={field.placeholder}
          secureTextEntry={field.secureTextEntry}
          value={values[field.name]}
          onChangeText={(text) => handleChange(field.name, text)}
        />
      ))}
      <Button title={buttonLabel} onPress={() => onSubmit(values)} />
    </View>
  );
}
