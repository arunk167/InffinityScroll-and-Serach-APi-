import React from 'react'
import {createStackNavigator} from  '@react-navigation/stack'
import navigationStrings from '../constants/navigationStrings.js';
import {Homepage} from '../Screen';
import TabRoutes from './TabRoutes';
import DrawerRoutes from './DrawerRoutes.js';




const Stack=createStackNavigator();
function MainStack(){
    return (
        <React.Fragment>
             <Stack.Screen name={navigationStrings.DRAWER_ROUTES} component={DrawerRoutes} 
            options={{
                headerShown:false
            }}/>
           
        </React.Fragment>
    )
}
export default MainStack ;