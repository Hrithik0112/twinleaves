import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={{
      flexDirection: 'row',
      backgroundColor: '#fff',
      height: 60,
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    }}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index

        const getIcon = () => {
          switch (route.name) {
            case 'Home ':
              return 'home'
            case 'Cart':
              return 'cart'
            case 'Profile':
              return 'account'
            default:
              return 'help'
          }
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(route.name)}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialCommunityIcons
              name={getIcon()}
              size={24}
              color={isFocused ? '#34C759' : '#666'}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default CustomTabBar