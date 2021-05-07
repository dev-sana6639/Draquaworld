import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { TextInput } from 'react-native';
import * as appcolors from '../../utils/colors'

const BasicInput = props => {
  //   const [passwordshow,setPasswordshow] = useState()

  const [isFocused, setIsFocused] = useState(false);
  const {
    emailname,
    passwordname,
    label,
    height,
    autocorrect,
    inputRef,
    onChangeText,
    secureTextEntry,
    value,
    width,
    color,
    placeholder,
    backgroundColor,
    placeholderTextColor,
    selectionColor,
    keyboardType,
    ...rest
  } = props;


  return (

    <TextInput

      ref={inputRef}
      keyboardType={keyboardType}
      
      placeholder={placeholder}
      placeholderTextColor={color}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
      InputProps={{ disableUnderline: true }}
      selectionColor={selectionColor}

      secureTextEntry={secureTextEntry}
      color={color}
      style={[
        styles.input,
        width && { width },
        height && { height },
        color && {color: color},
        backgroundColor && { backgroundColor: backgroundColor }

      ]}

      
     

    />
  )
}
const styles = StyleSheet.create({
  input: {
    
    marginLeft:15

  }
})
export default BasicInput;