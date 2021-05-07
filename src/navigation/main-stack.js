import React from 'react';
import {authStack,mainstack} from '../config/navigator';
import {createStackNavigator,TransitionSpecs } from '@react-navigation/stack';
import AuthStack from './auth-stack';
import MyTabs from '../navigation/bottom-tabs';
import DetailScreen from '../screen/Detail/DetailScreen'
import StockDetails from '../screen/stock/StockDetails';
import LoginScreen from '../screen/Auth/Login';
import Home from '../screen/Home/home';
import LeadScreen from '../screen/leads/Leads';
import TicketScreen from '../screen/tickets/Tickets';
import Mycart from '../screen/Cart/MyCart';
import StocksScreen from '../screen/stock/Stock';
import TicketDetails from '../screen/tickets/ticketdetails';
import Leadlist from '../screen/Detail/Leadlist';

const Stack = createStackNavigator();

const config = {
    Animation:'spring',
    gestureDirection: 'vertical',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

function MainStack() {
    
    return(
        <Stack.Navigator
        initialRouteName={mainstack.home}
        
        >
            
            {/* <Stack.Screen options={{headerShown: false}} name={mainstack.loading} component={LoadingScreen} /> */}
           
            <Stack.Screen options={{headerShown: false}} name={mainstack.home} component={Home} />
            <Stack.Screen name={mainstack.login} component={LoginScreen} />
            <Stack.Screen options={{headerShown: false}}  name={mainstack.Detail} component={DetailScreen} />
            <Stack.Screen name={mainstack.stock} component={StockDetails} />
            <Stack.Screen options={{ headerShown: false,}} name={mainstack.lead} component={LeadScreen}    />
            <Stack.Screen  options={{headerShown: false}}  name={mainstack.ticket} component={TicketScreen} />
            <Stack.Screen options={{headerShown: false}} name={mainstack.cart} component={Mycart} />
            <Stack.Screen options={{headerShown: false}} name={mainstack.stockScreen} component={StocksScreen} />
            <Stack.Screen options={{headerShown: false}} name={mainstack.ticketScreen} component={TicketDetails} />
            <Stack.Screen options={{headerShown: false}} name={authStack.login} component={LoginScreen} />

 
        </Stack.Navigator>
    )
}

export default MainStack;