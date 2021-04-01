import React, { Component } from 'react'
import {Alert} from 'react-native'
import FlashMessage from 'react-native-flash-message';              
import { Provider } from 'react-redux';

import Routes from './src/Navigation/Routes';
import store from './src/redux/store';
import types from './src/redux/types';
import { getUserData } from './src/utils/utils';
import SplashScreen from 'react-native-splash-screen'
const {dispatch}=store

export default class App extends Component {
componentDidMount(){
 
  getUserData().then((userData)=>{
  setTimeout(()=>{
    SplashScreen.hide()
  },1000)
   if(userData){
        dispatch({
             type:types.ONOTPVERIFY, 
             payload:userData
    }) 
   }    
  })
 
  }

  render() {
    return (
    <>
   <Provider store={store}>
        <Routes />
     <FlashMessage position='top'/>
   </Provider>
    </>
    )
  } 
}
  