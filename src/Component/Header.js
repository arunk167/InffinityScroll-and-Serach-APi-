import React from 'react'
import { View, Text,StyleSheet ,Image,TouchableOpacity} from 'react-native'

import imagePath from '../constants/imagePath'
import colors from '../styles/colors'
import commonStyles from '../styles/commonStyles'
import fontFamily from '../styles/fontFamily'
import {useNavigation} from '@react-navigation/native'

const Header=({
    headerText='KhataBook',
    isImage,
   
})=>{
   const navigation =useNavigation();
    return(
        <View style={styles.parent}>
           {isImage && 
            <TouchableOpacity onPress={()=>navigation.openDrawer()} >
            <Image source={imagePath.menu} style={styles.image} />
            </TouchableOpacity>}
            <Text style={styles.headerText}>
                {headerText}
            </Text>
        </View>
    )
}
export default Header;
const styles=StyleSheet.create({
    headerText:{
        ...commonStyles.mediumFont20,
        color:colors.white,
        marginHorizontal:5,
       
        fontFamily:fontFamily.bold
      },
      parent:{
          height:35,
          backgroundColor:colors.themeColor,
          flexDirection:'row'
        
      },
      image:{
          tintColor:colors.white,
          width:22,
          height:22,
          marginHorizontal:15,
          marginTop:3
         
        
      }
})