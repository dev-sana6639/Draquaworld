import React from 'react';
import {View,Text} from 'react-native';
import Svg,{ Path } from 'react-native-svg';
import * as appcolors from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';

export default function LoginWavy({customStyles}){

    return(
        <View style={customStyles}>
              <LinearGradient style={{height:500}} colors={['#6787ba','#6587bd','#546f9a','#48628b']} >
                   <Svg
                  height="60%"
                  width="100%"
                  viewBox= "0 0 1440 320"
                  style={{position: 'absolute',top:380}}
                >
                <Path
                   fill={'#48628b'}
                   d= "M0,128L120,154.7C240,181,480,235,720,240C960,245,1200,203,1320,181.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
                />
                
                </Svg>
           
            </LinearGradient>
        </View>
    )
}