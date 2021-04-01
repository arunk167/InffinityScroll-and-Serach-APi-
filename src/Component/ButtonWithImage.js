import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import colors from '../styles/colors'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'



export default function ButtonWithImage(props) {
    const {bgColor,buttonText,imageSource,isImageVisiable,btnTextColor,onTouch}=props
    return (
           <TouchableOpacity style={{
            height:40,
            justifyContent:'center',
            alignItems:'center',   
        
        }}
        onPress={onTouch}>
            
              {isImageVisiable  && <Image source={imageSource}
                 style={styles.imageStyle}
              />}
              <Text style={{color:btnTextColor,textTransform: 'uppercase',}}>{buttonText}</Text>    
               
           </TouchableOpacity>
     
    )
}
const styles = StyleSheet.create({
  
imageStyle:{
    position:'absolute',
    left:10,
    height:moderateScaleVertical(20),
    width:moderateScale(20),
    tintColor:colors.white
   
}
})

