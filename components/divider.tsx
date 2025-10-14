import React from 'react';
import { DimensionValue, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';

type DividerProps = {
  lineColor?: string;                   // Color of the line
  text?: string;                        // Optional centered text
  textColor?: string;                   // Color of the text
  textSize?: number;                    // Font size of the text
  textWeight?: TextStyle['fontWeight']; // Font weight of the text
  thickness?: number;                   // Line thickness
  marginVertical?: number;              // Vertical spacing
  style?: ViewStyle;                    // Additional style for the container
  textStyle?: TextStyle;                // Additional style for the text
  width?: DimensionValue;               // Width of the line in percentage
};

export function Divider({
  lineColor = '#ccc',
  text,
  textColor = '#666',
  textSize = 14,
  textWeight = '500',
  thickness = 1,
  marginVertical = 16,
  style,
  textStyle,
  width = '100%',
}: DividerProps) {
  if (text) {
    return (
      <View style={[styles.container, { marginVertical, width }, style]}>
        <View style={[styles.line, { backgroundColor: lineColor, height: thickness }]} />
        <Text style={[styles.text, { color: textColor, fontSize: textSize, fontWeight: textWeight }, textStyle]}>{text}</Text>
        <View style={[styles.line, { backgroundColor: lineColor, height: thickness }]} />
      </View>
    );
  }

  return <View style={[{ backgroundColor: lineColor, height: thickness, width, marginVertical }, style]} />;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    marginHorizontal: 8,
    textAlign: 'center',
  },
});
