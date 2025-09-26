import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type ThemedButtonProps = {
  children: ReactNode;
  type?: 'default' | 'dark' | 'transparent';
  onPress: () => void;
  style?: object;
};

export function ThemedButton({
  children,
  type = 'default',
  onPress,
  style,
}: ThemedButtonProps) {
  const backgroundColors = {
    default: '#4f63ac',
    dark: '#3f4a59',
    transparent: 'transparent'
  };

  const textColors = {
    default: '#fff',
    dark: '#fff',
    transparent: '#4f63ac'
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonBase, { backgroundColor: backgroundColors[type] }, style]}
    >
      {typeof children === 'string' ? (
        <Text style={[styles.textBase, { color: textColors[type] }]}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBase: {
    fontWeight: 'bold',
  },
})