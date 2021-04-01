import React from 'react'
import {createStackNavigator} from  '@react-navigation/stack'
import navigationStrings from '../constants/navigationStrings.js';
import {Homepage} from '../Screen';
import TabRoutes from './TabRoutes';



const Stack=createStackNavigator();
function AuthSatck(){
    return (
        <React.Fragment>
            
            <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} 
            options={{
                headerShown:false
            }}/>
           
        </React.Fragment>
    )
}
export default AuthSatck ;