import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Map from './Map';
import Profile from './Profile';
import Form from './Form';
import SignOut from './Signout';
import Display from './Display';
import Map from './Map';
const Drawer = createDrawerNavigator();

function Navbar() {
  return (
    <Drawer.Navigator initialRouteName="Display">
      <Drawer.Screen
        name="Form"
        component={Form}
        options={{ drawerLabel: 'Form' }}
      />
      <Drawer.Screen
        name="Display"
        component={Display}
        options={{ drawerLabel: 'Display' }}
      />
      <Drawer.Screen
        name="Map"
        component={Map}
        options={{ drawerLabel: 'Map' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
      <Drawer.Screen
        name="SignOut"
        component={SignOut}
        options={{ drawerLabel: 'SignOut' }}
      />
    </Drawer.Navigator>
  );
}

export default Navbar;