import React from 'react'
import {createStackNavigator} from  '@react-navigation/stack'
import navigationStrings from '../constants/navigationStrings.js';
import { Login, OtpVerification} from '../Screen';

const Stack=createStackNavigator();
function AuthSatck(){
    return (
        <React.Fragment>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login}
            options={{
                headerShown:false
            }}/>
            <Stack.Screen name={navigationStrings.OTP_VERIFICATION} component={OtpVerification}
            options={{
                headerShown:false
            }}/>
           
        </React.Fragment>
    )
}
export default AuthSatck ;