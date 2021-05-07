import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LeadScreen from '../screen/leads/Leads';
import TicketScreen from '../screen/tickets/Tickets';
import StocksScreen from '../screen/stock/Stock';
import MyCart from '../screen/Cart/MyCart'
import MyTabBar from '../navigation/Mytabbar'
import {tab} from '../config/navigator';
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen 
      name={tab.lead} 
      component={LeadScreen}
      />
      <Tab.Screen name={tab.ticket} component={TicketScreen} />
      <Tab.Screen name={tab.cart} component={MyCart} />
      <Tab.Screen name={tab.stock} component={StocksScreen} />
    </Tab.Navigator>
  );
}

export  default MyTabs;