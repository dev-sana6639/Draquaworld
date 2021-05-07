import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';
import { MyText } from '../Text/text';

const CustomGradient = (props) => {
    console.log(props)
    const {
        colors,
        text1,
        text2,
        height,
        width,
        style,
        justifycontent,
        alignItem,
        bold,
        fontSize
    } = props;
    return (
        <LinearGradient colors={colors} style={StyleSheet.flatten([

            height && { height: height },


        ])}>
            <View style={StyleSheet.flatten([
                styles.container,
            ])}>
                <MyText style={StyleSheet.flatten([
                    fontSize && { fontSize: fontSize },
                    bold && {
                        fontWeight: bold,
                        color: 'white',
                        shadowColor: "black",
                    }

                ])}
                    title={text1}
                    borderBottomWidth={1}
                    borderBottomColor={'white'}
                />

                <MyText
                    style={StyleSheet.flatten([
                        fontSize && { fontSize: fontSize },
                        bold && {
                            fontWeight: bold,
                            color: 'white',
                            shadowColor: "black",
                        }

                    ])}
                    title={text2}
                    
                />

            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',


    }
})

export default CustomGradient;