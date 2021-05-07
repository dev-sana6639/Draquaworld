import React, {Component} from 'react';
import {View,Text,StatusBar,Platform} from 'react-native';
import Router from './src/navigation/root-Switch'
class AppRouter extends Component{
  
   
    render(){

        
        return(
         <Router />
        
        )
    }
}

export default AppRouter;