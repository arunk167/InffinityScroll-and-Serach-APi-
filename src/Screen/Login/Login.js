import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ButtonWithImage from '../../Component/ButtonWithImage';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import TextInputWithLabel from '../../Component/TextInputWithLabel';
import WrapperContainer from '../../Component/WrapperContainer';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';

import validator from '../../utils/validation';
import {showMessage} from 'react-native-flash-message';
import actions from '../../redux/actions';

import {
  moderateScaleVertical,
  moderateScale,
} from '../../styles/responsiveSize';
import { setUserData } from '../../utils/utils';
import strings from '../../constants/lang';
import Header from '../../Component/Header';
import fontFamily from '../../styles/fontFamily';
import styles from './styles';

export default class Login extends Component {
  state = {
    userEmail: '',
    userPassword: '',
    isLoading: false,
    phoneNumber:''
  };
  onmove = () => {
    const {navigation} = this.props;
    navigation.navigate(navigationStrings.SIGNUP);
  };
  isValidData = () => {
    const {
      phoneNumber
    } = this.state;
    const error = validator({
      phoneNumber:phoneNumber
    });
    if (error) {
      showMessage({
        type: 'danger',
        icon: 'danger',
        message: error,
      });
      return false;
    }

    return true;
  };
  onLogin = () => {

    const {userPassword, userEmail,phoneNumber} = this.state;
    const {navigation} = this.props;
    if (this.isValidData()) {
      this.setState({
        isLoading: true,
      });

      actions
        .login({
          contactDetails:{
            phoneNo:phoneNumber,
            countryCode:'+91',
            countryCodeISO:"IN" 
          }
         
        })
        .then(res => {
          this.setState({
            isLoading: false,
          });
          showMessage({
            type: 'success',
            icon: 'success',
            message:strings.OTP_SENT_SUCCESSFULLY,
          });
        navigation.navigate(navigationStrings.OTP_VERIFICATION,{userId:res.data.userId})

        })
        .catch(error => {
          this.setState({
            isLoading: false,
          });
          showMessage({
            type: 'danger',
            icon: 'danger',
            message:strings.SOMETHING_WENT_WRONG,
          });
        });
    }
  };
  _onChangeText(key) {
    return value => {
      this.setState({
        [key]: value,
      });
    };
  }
  render() {
    const {isLoading,phoneNumber} = this.state;
    return (
      <WrapperContainer>
          <Header headerText={"Login"} />
        <View style={{flex: 1, backgroundColor: colors.white}}
         pointerEvents={isLoading?'none':'auto'} >
          <View
            style={{
              marginHorizontal: 15,
              marginTop: moderateScaleVertical(15),
            }}>
            <TextInputWithLabel
              label={strings.YOUR_PHONE_NUMBER}
              placeholder={strings.YOUR_PHONE_NUMBER}
              onChangeText={this._onChangeText('phoneNumber')}
              value={phoneNumber}
            />
          
            <View>
              <ButtonWithLoader btnText={strings.LOGIN} onPress={this.onLogin} isLoading={isLoading}
              btnTextStyle={{fontFamily:fontFamily.bold}}
            />
            </View>
          </View>

          <View style={styles.socialRow}>
            <View style={styles.hyphen} />
            <Text style={styles.orText}>{strings.OR_LOGIN_WITH}</Text>
            <View style={styles.hyphen} />
          </View>
          <View style={styles.socialButton}>
            <View
              style={{width: '46%', borderWidth: 1, borderColor: colors.blue}}>
              <ButtonWithImage
                imageSource={imagePath.fb}
                buttonText={strings.FACEBOOK}
                isImageVisiable={true}
                btnTextColor={colors.blue}
              />
            </View>
            <View
              style={{width: '46%', borderWidth: 1, borderColor: colors.red}}>
              <ButtonWithImage
                imageSource={imagePath.google}
                buttonText={strings.GOOGLE}
                isImageVisiable={true}
                btnTextColor={colors.red}
              />
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <TouchableOpacity >
              <Text style={{...styles.txtSmall, color: colors.textGrey}}>
                {strings.DID_NOT_HAVE_AN_ACCOUNT}
                <Text
                  style={{
                    color: colors.themeColor,
                  }}>
                  {' '}
                  {strings.SIGN_IN}
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </WrapperContainer>
    );
  }
}

