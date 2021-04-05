import React, {Component} from 'react';

import { createDrawerNavigator } from "@react-navigation/drawer"

import navigationStrings from '../constants/navigationStrings';


import TabRoutes from './TabRoutes';
import DrawerContent from '../Component/DrawerContent';



const Drawer = createDrawerNavigator();

function DrawerRoutes({navigation}) {
  return (
            <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
                <Drawer.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
              
            </Drawer.Navigator>

  );
}


export default DrawerRoutes;