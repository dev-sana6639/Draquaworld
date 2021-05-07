import React, { useEffect,useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { rootSwitch, mainstack, authStack } from '../config/navigator'
import AuthStack from './auth-stack';
import MyTabs from '../navigation/bottom-tabs'
import { isLoginSelector } from '../modules/auth/selectors';
import {
    loadingSelector,
    isGettingStartSelector
} from '../modules/common/selectors';
const Stack = createStackNavigator();

import MainStack from './main-stack';
import GetStartScreen from '../get-start';
import LoadingScreen from '../loading';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch } from 'react-redux';
import { isgettingstart, startLoading,stopisLoading } from '../modules/common/actions';
import LoginScreen from '../screen/Auth/Login';
import Home from '../screen/Home/home';



function RootStack({ isGettingStart, loading, isLogin, user }) {

    const dispatch = useDispatch();

   useLayoutEffect(() =>{
    setTimeout(() => {  dispatch(stopisLoading()) }, 3000);
   })
 
    

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            {
                loading == true ? (
                    <Stack.Screen name={rootSwitch.loading} component={LoadingScreen} />
                ) : isLogin == undefined ? (
                    <Stack.Screen name={rootSwitch.auth} component={AuthStack} />
                )
                    :
                    (
                         <Stack.Screen name={rootSwitch.main} component={MainStack} />
                    )

                




            }

            {/* <Stack.Screen name={rootSwitch.main} component={MainStack} /> */}


        </Stack.Navigator>

    )
}

const mapStateToProps = state => {



    return {
        isGettingStart: isGettingStartSelector(state),
        // isLogin: isLoginSelector(state),
        loading: loadingSelector(state),
        isLogin: isLoginSelector(state),

    }




}

export default connect(mapStateToProps)(RootStack)
