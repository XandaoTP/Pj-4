import React from 'react';
import { Text, TextProps} from 'react-native';

type Props = TextProps

export function CustomText({ ...props }: Props) {
  return (
    <Text  {...props} />
  );
}
