import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'

export default StyleSheet.create({
    searchBarView:{

        borderColor:colors.themeColor,
         backgroundColor:colors.white,
         flexDirection:'row',
         alignItems:'center',
         paddingHorizontal:10,
         borderWidth:1,
         marginHorizontal:5,
         marginVertical:4,
         borderRadius:5
      
     }, searchIcon:{
       height:18,
       width:18,
       tintColor:colors.themeColor
     },
     
     searcTextInput:{
       paddingVertical:8
     },
     activity:{
       position:'absolute',
       right:5
     }   
})

