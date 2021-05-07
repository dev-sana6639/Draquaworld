import * as React from 'react';
import {View,Text,StyleSheet } from 'react-native';
import adjust from './adjust';
import {
    white,
    loginbutton,
    greytext
} from '../../utils/colors'
import Icon from 'react-native-vector-icons/Ionicons';

const MyText = ({ h1, h2, h3, h4, h5,icon,iconsize,iconcolor, p, bold, 
    italic,color,title,style,marginBottom,
    shadowColor,
    borderBottomWidth,
    borderBottomColor,
    ...rest })  => {
        

    return(
        <View style={[
            styles.container,
            borderBottomWidth && {
                borderBottomWidth : borderBottomWidth
            },
            borderBottomColor && {
                borderBottomColor : borderBottomColor
            }
            
        ]}
            >
        <Text style={[
            styles.mytext,
            h1 && { fontSize: adjust(48) },
            h2 && { fontSize: adjust(30) },
            h3 && { fontSize: adjust(20) },
            h4 && { fontSize: adjust(18) },
            h5 && { fontSize: adjust(16) },
            p && { fontSize: adjust(12) },
            bold && { fontWeight: 'bold' },
            italic && { fontStyle: 'italic'},
            color && { color:color},
            marginBottom && {marginBottom: marginBottom},
            shadowColor && {shadowColor: shadowColor},
            
            
            style
        ]}{...rest}>{title}</Text>

        
        </View>
    );

};

const styles = StyleSheet.create({
   container:{
    //    borderBottomWidth:1
   }
});

export { MyText }