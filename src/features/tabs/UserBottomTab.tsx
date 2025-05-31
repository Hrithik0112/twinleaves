import { View, Text } from 'react-native'
import React from 'react'
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomTabBar from './CustomTabBar'
import ProfileScreen from '@features/Profile/ProfileScreen'
import CartScreen from '@features/Cart/CartScreen'
import HomeScreen from '@features/Home/HomeScreen'



const Tab = createBottomTabNavigator()
const UserBottomTab = () => {
  return (
    <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
    screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
    }}
    >
      <Tab.Screen name="Home " component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  )
}

export default UserBottomTab