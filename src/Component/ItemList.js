import React from 'react';
import {View, Text, Image, StyleSheet, Button,} from 'react-native';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commomStyles from '../styles/commonStyles'
import commonStyles from '../styles/commonStyles';


export default function ItemList(props) {
  const {data, btnText} = props;
  return (
    <View style={styles.parent}>
      {/* <View style={{backgroundColor: colors.lightGreyBg}}>
        <Text style={styles.name}>{data.fullName}</Text>
      </View> */}
      <View style={styles.imageView}>
      <Image style={styles.image} source={{uri: data.profileImg[1].original}} />
      </View>
      <Text style={styles.name}>{data.fullName}</Text>
      <Text style={styles.city}>{data.gender}</Text>
      <Text style={styles.city}>{data.addressDetails.city}</Text>

      <View style={styles.button}>
        <Text
          style={{
            textAlign: 'center',
            color: colors.themeColor,
            textTransform: 'uppercase',
          }}>
          {btnText}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height:100,
    width:100,
       resizeMode:'contain',
       borderRadius:100,
      
      
    

  },
  imageView:{
          justifyContent:'center',
          alignItems:"center",
          marginVertical:3
  },
  name: {
    textAlign: 'center',
    fontFamily: fontFamily.bold,
    color: colors.themeColor,
    textTransform: 'uppercase',
  },
  button: {
  
    height: 35,
    justifyContent: 'center',
    borderRadius: 30,
    marginVertical: 5,
    marginHorizontal:5,

    borderColor:colors.themeColor,
    borderWidth:0.5
  },
  parent: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth:0.5,
    borderColor:colors.lightGreyBg,
    width:"45%",
    borderRadius:10
  },
  city:{
    ...commonStyles.mediumFont14,
    textAlign:'center'
  }
});
