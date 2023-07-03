import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../components/Home/Home.jsx'
import Login from '../Login/Login.jsx'

const Drawer = createDrawerNavigator();

function DrawerNavigator () {
  return (
    <Drawer.Navigator initialRouteName='Iniciar Sesion'>
      <Drawer.Screen name='Iniciar Sesion' component={Login} />
      <Drawer.Screen name='Inicio' component={Home} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator
