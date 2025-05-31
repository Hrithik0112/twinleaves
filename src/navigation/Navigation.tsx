import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { navigationRef } from '@utils/NavigationUtils'
import UserBottomTab from '@features/tabs/UserBottomTab'
import SplashScreen from '@features/auth/SplashScreen'
import LoginScreen from '@features/auth/LoginScreen'
const Stack = createNativeStackNavigator()

const Navigation: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen"
          options={{
            animation : 'fade_from_bottom'
          }}
         component={LoginScreen}/>
         <Stack.Screen
         options={{
          animation : 'fade'
         }}
          name="UserBottomTab" component={UserBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation