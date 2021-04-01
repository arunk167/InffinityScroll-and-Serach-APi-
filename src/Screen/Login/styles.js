import {StyleSheet} from 'react-native'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'

import {
    moderateScaleVertical,
    moderateScale,
  } from '../../styles/responsiveSize';
  import commonStyles from '../../styles/commonStyles';
export default StyleSheet.create({
    hyphen: {
        width: 100,
        height: 1,
        backgroundColor: colors.textGrey,
        opacity: 0.6,
      },
      socialRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScaleVertical(20),
      },
      orText: {
        ...commonStyles.mediumFont14,
        lineHeight: 24,
        textAlign: 'center',
    
        opacity: 0.6,
        marginTop: 0,
        marginHorizontal: moderateScale(16),
      },
      socialRowBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(40),
        marginTop: moderateScaleVertical(20),
      },
      bottomContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: moderateScaleVertical(20),
      },
      socialButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: 20,
        marginVertical: 20,
      },
})