import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const GetStartScreen = () => {
    return(
        <View style={styles.container}>
            <Text>this is getting start screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container :{
        flex:1
    }
})
export default GetStartScreen;