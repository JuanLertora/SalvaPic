import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../../pages/DrawerNavigation/DrawerNavigation';

function Main () {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default Main
