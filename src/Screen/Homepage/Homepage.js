import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import ButtonWithImage from '../../Component/ButtonWithImage'
import Header from '../../Component/Header'
import WrapperContainer from '../../Component/WrapperContainer'
import imagePath from '../../constants/imagePath'
import strings from '../../constants/lang'
import actions from '../../redux/actions'
import colors from '../../styles/colors'
import styles from './styles'

 class Homepage extends Component {
  Add=()=>{
  
    actions.Add(5)
  }
  cashOut=()=>{
    actions.CashOut(3)
  }
    render() {
      const {value,total_balance,total_cash_out}=this.props
        return (
        
         <WrapperContainer>
            <View style={{flex:1}}>
              <Header />
               <View style={styles.cashCard}>
               
            <View style={styles.textCard}>
                <Text style={styles.cashInText}>{strings.TOTAL_CASH_IN}</Text>
                <Text style={styles.cashInText}>{value}</Text> 
             </View>
                   
            <View style={styles.textCard}>
                <Text style={styles.cashOutText}>{strings.TOTAL_CASH_OUT}</Text>
                <Text style={styles.cashOutText}>{total_cash_out}</Text>
             </View>
               
        </View>
        <View style={styles.totalBalanceView}>
              <Text style={styles.totalText}>{strings.TOTAL_BALANCE}</Text>
              <Text style={styles.totalText}>{total_balance}</Text>
        </View>

               <View style={styles.buttonView}>
               <View style={styles.buttonCashIn}>
                 <ButtonWithImage  buttonText={strings.CASH_IN} btnTextColor={colors.white}
                 imageSource={imagePath.plus} isImageVisiable={true} onTouch={this.Add}
                 />
               </View>
               <View style={styles.buttonCashOut}>
                 <ButtonWithImage  buttonText={strings.CASH_OUT} btnTextColor={colors.white}
                 imageSource={imagePath.minus} isImageVisiable={true} onTouch={this.cashOut}
                 />
               </View>
               </View>
            </View>
         </WrapperContainer>
            
        )
    }
}
const mapStateToProps=state=>{
  return {
    value:state.a,
    total_balance:state.total_balance,
    total_cash_out:state.total_cash_out
  }
}
export default connect(mapStateToProps)(Homepage)
