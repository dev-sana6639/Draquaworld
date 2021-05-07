import React from 'react';
import { StyleSheet, Button, TouchableOpacity, View, SafeAreaView, Text, Alert } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };
import { MyText } from '../Text/text';
import Icon from 'react-native-vector-icons/Ionicons';

const MyButton = ({ title, icon, iconsize, iconcolor, borderwidth, alignself, radius, width, bold, onPress, size, color, backgroundColor }) => {


  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,

        size === 'sm' && {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 6,
          elevation: 6,

        },
        size === 'lg' && {
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
       
          fontWeight: 'bold'
        },

        backgroundColor && { backgroundColor },
        radius && { borderRadius: radius },
        width && { width: width },
        alignself && { alignSelf: alignself },
        radius && { borderRadius: radius },
        borderwidth && { borderWidth: borderwidth }

      ]}
      activeOpacity={0.8}
    >
      <MyText
        title={title}
        color={color}
        bold
        width={width}
      />

      { icon && (
        <View style={{
          
          justifyContent:'center',
          marginLeft:5
        }}>
        <Icon
          name={icon}
          size={iconsize}
          color={iconcolor}
          
        />
        </View>
      )

      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    
    backgroundColor: "#009688",

    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  }
});

export default MyButton;