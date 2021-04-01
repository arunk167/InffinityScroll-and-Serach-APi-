import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
export default StyleSheet.create({
    buttonView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:'auto',
        marginVertical:15
    },
    cashCard:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20
    },
    textCard:{
        width:"49%",
        backgroundColor:colors.white,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10
        
    },
    cashOutText:{color:colors.red,fontSize:16,fontFamily:fontFamily.medium},
    cashInText:{color:colors.green,fontSize:16,fontFamily:fontFamily.medium},
    buttonCashIn:{backgroundColor:colors.green,width:'40%'},
   buttonCashOut:{backgroundColor:colors.red,width:'40%',},
   totalBalanceView:{
       marginHorizontal:20,
       marginVertical:5,
       padding:5,
       flexDirection:'row',
       justifyContent:'space-between',
       backgroundColor:colors.white,
       paddingVertical:10
   },
   totalText:{
       color:colors.green,fontSize:16,fontFamily:fontFamily.medium
   }
    
})