import React from 'react'
import { View, Text,StyleSheet ,Image} from 'react-native'
import colors from '../styles/colors'
import commonStyles from '../styles/commonStyles'
import fontFamily from '../styles/fontFamily'
const Header=({
    headerText='KhataBook',
    imageSource
})=>{
    return(
        <View style={styles.parent}>
            <Image source={imageSource} style={styles.image} />
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
        marginHorizontal:15,
        textAlign:'center',
        fontFamily:fontFamily.bold
      },
      parent:{
          height:35,
          backgroundColor:colors.themeColor,
        
      },
      image:{
          tintColor:colors.white,
          width:25,
          height:25,
         position:'absolute',
         top:5,
         left:15
        
      }
})