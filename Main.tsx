import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackNavigation from './navigation/StackNavigation'

const Main = () => {
  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}

export default Main