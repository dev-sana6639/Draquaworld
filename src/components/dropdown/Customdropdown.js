import React from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Customdropdown = (props) => {
  console.log(props.data)
  const data = props.data;
  
  return (
    <RNPickerSelect
     
      items={data}
    
    />


  );
};

export default Customdropdown;

