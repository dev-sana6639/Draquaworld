import React from 'react';
import {View,Text,StyleSheet, Dimensions} from 'react-native';
import CustomGradient from './components/gradient/customgradient'

const {width,height} = Dimensions.get('window');
const LoadingScreen = () => {
    return(
        <View style={styles.container} >
            <CustomGradient 
            colors={['#4c669f', '#3b5998', '#192f6a']} 
            text1= {'Dr. Aqua World'}
            text2= {'Pani ka Doctor'}
            height={'100%'}
            width={'100%'}
            fontSize = {35}
            bold={'bold'}
            />
            
        </View>
    )
};
const styles = StyleSheet.create({
    container :{
        height: height,
        width: width,
        
     
    }
})
export default LoadingScreen   ;