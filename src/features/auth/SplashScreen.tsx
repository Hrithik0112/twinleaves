import { View, StatusBar, Platform, Image, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { resetAndNavigate } from '@utils/NavigationUtils'

const SplashScreen:React.FC = () => {
const [fadeAnim] = useState(new Animated.Value(0));

  Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 2000,
  useNativeDriver: true, // Add this line
}).start();

    // Navigate to LoginScreen after 3 seconds
    useEffect(() => {
       const timer = setTimeout(() => {
            resetAndNavigate('LoginScreen')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])
  return (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#34C759' }}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <MaterialCommunityIcons name="leaf" size={100} color="#fff" />
      </Animated.View>
      <Animated.Text
        style={{
          fontSize: 24,
          color: '#fff',
          fontWeight: 'bold',
          opacity: fadeAnim,
          marginTop: 20,
        }}
      >
        Twinleaves
      </Animated.Text>
      <Animated.Text
        style={{
          fontSize: 16,
          color: '#fff',
          opacity: fadeAnim,
          marginTop: 10,
        }}
      >
        Your daily essentials, delivered
      </Animated.Text>
      <Animated.View
        style={{
          width: 100,
          height: 2,
          backgroundColor: '#fff',
          opacity: fadeAnim,
          marginTop: 20,
        }}
      />
    </View>
  )
}

export default SplashScreen