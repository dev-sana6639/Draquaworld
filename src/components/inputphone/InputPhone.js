import React, { useState, useRef } from "react";
import {View} from 'react-native';
import PhoneInput from "react-native-phone-number-input";

const InputPhone = (props) => {

    const phoneInput = useRef(null);

    const {
        ref,
        defaultValue,
        defaultCode,
        layout,
        onChangeText,
        withShadow,
        autoFocus,
        containerStyle,
        textContainerStyle,
        textInputStyle,
        flagButtonStyle,
        countryPickerButtonStyle,
        placeholder,
        onChangeFormattedText,
        codeTextStyle,
        onChangeCountry,
    } = props;

     return(
         <View>
        <PhoneInput
        ref={ref}
        defaultValue={defaultValue}
        defaultCode={defaultCode}
        layout={layout}
        onChangeText={onChangeText}
        onChangeFormattedText={onChangeFormattedText}
        placeholder={placeholder}
        onChangeCountry={onChangeCountry}
        withShadow = {withShadow}
        autoFocus = {autoFocus}
        containerStyle = {containerStyle}
        textContainerStyle = {textContainerStyle}
        textInputStyle={textInputStyle}
        flagButtonStyle={flagButtonStyle}
        countryPickerButtonStyle={countryPickerButtonStyle}
        codeTextStyle ={codeTextStyle}
      />
      </View>

     )
}
export default InputPhone;