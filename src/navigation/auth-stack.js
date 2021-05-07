import React from 'react';
import {authStack} from '../config/navigator';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screen/Auth/Login';


const Stack = createStackNavigator();

function AuthStack() {
    return(
        <Stack.Navigator initialRouteName={authStack.login}>
            <Stack.Screen options={{headerShown: false}} name={authStack.login} component={LoginScreen} />
            
        </Stack.Navigator>
    )
}

export default AuthStack;