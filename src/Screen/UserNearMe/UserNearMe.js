import React, { Component } from 'react'
import { Text, TextInput, View } from 'react-native'
import strings from '../../constants/lang'

export default class UserNearMe extends Component {
    state=[
        searchInput=''
    ]
    _onChangeText=(key)=>{
           return value=>{
               this.setState({
                   [key]:value
                   
               })
           }
        
    }
    render() {
        
        return (
            <View>
               <TextInput 
               placeholder={strings.ENTER_YOUR_EMAIL}
               onChangeText={this._onChangeText('searchInput')}
               
            />
            </View>
        )
    }
}

