import React, { Component } from 'react'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';
import WrapperContainer from '../../Component/WrapperContainer';
import actions from '../../redux/actions'
import { clearUserData } from '../../utils/utils';
 class Profile extends Component {
    onLogout=()=>{
        clearUserData();
        actions.onLogout();
    }
   
    render() {
        return (
            <WrapperContainer>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text> Profile </Text>
                <TouchableOpacity style={{marginTop:20}} onPress={this.onLogout}>
                    <Text>Logout</Text>
                    
                </TouchableOpacity>
               
            </View>
            </WrapperContainer>
        )
    }
}
export default Profile;
