import React, {LegacyRef} from 'react';
import {TextInput, TextInputProps, StyleProp, ViewStyle} from 'react-native';
import {colors} from '../../constants';
import styles from './styles';

type InputProps = {
  reference?: LegacyRef<TextInput>;
  style?: StyleProp<ViewStyle>;
};

const Input = ({reference, style, ...props}: TextInputProps & InputProps) => (
  <TextInput
    ref={reference}
    style={[styles.input, style]}
    placeholderTextColor={colors.primary}
    {...props}
  />
);

export default Input;
