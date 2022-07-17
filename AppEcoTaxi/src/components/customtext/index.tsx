import React from 'react';
import { StyleSheet, Text, TextProps} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = TextProps & {
  bold?: boolean
}

export function CustomText({style, bold = false, ...props }: Props) {
  return (
    <Text style={[styles.text, bold ? styles.bold : {} , style]} {...props} />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'CormorantSC-Regular',
  },
  bold: {
    fontFamily: 'CormorantSC-Bold'
  }
})