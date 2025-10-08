import { Pressable, StyleSheet, Text } from 'react-native';

type ThemedButtonProps = {
  type?: 'default' | 'dark' | 'transparent';
  title: string;
  onPress: () => void;
  style?: object;
};

export function ThemedButton({
  type = 'default',
  title,
  onPress,
  style,
}: ThemedButtonProps) {

  const backgroundColors = {
    default: '#4f63ac',
    dark: '#3f4a59',
    transparent: 'transparent'
  };

  const titleColors = {
    default: '#fff',
    dark: '#fff',
    transparent: '#4f63ac'
  };

  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonBase, { backgroundColor: backgroundColors[type] }, style]}
    >
      <Text style={[styles.titleBase, { color: titleColors[type] }, style]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    height: 60,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleBase: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    fontWeight: 700,
  },
})