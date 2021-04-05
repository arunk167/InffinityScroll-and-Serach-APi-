import React from "react";
import {View, StyleSheet, Image,Text} from "react-native";
import { 
     Drawer 
   } from "react-native-paper"
import {DrawerContentScrollView,DrawerItem} from "@react-navigation/drawer"

import navigationStrings from "../constants/navigationStrings";
import colors from "../styles/colors";
import fontFamily from "../styles/fontFamily";
import imagePath from "../constants/imagePath";



export default function DrawerContent(props){
    const {navigation}=props;
    return(
        <View style={{flex:1,backgroundColor:colors.lightGreyBg}}>
                 <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Image 
                                source={{
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA7J_nWmuLQLoOtHyvwRXfkrkVvW621Bx9nQ&usqp=CAU'
                                }}
                               style={styles.profileImage}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Text style={styles.title}>Arun Kumar Saini</Text>
                                <Text style={styles.caption}>@sainiarun167</Text>
                            </View>
                        </View>

                
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Image
                              source={imagePath.home}
                              style={{height:22,width:22,tintColor:colors.themeColor}}
 
                           
                              />
                            )}
                            label={() => (
                              <Text style={styles.textLable}>
                               Home
                              </Text>
                         )}
                            onPress={() => {navigation.navigate(navigationStrings.USER_SEARCH)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Image
                              source={imagePath.profile}
                              style={{height:22,width:22,tintColor:colors.themeColor}}
 
                           
                              />
                            )}
                            label={() => (
                              <Text style={styles.textLable}>
                                Profile
                              </Text>
                         )}
                            onPress={() => {navigation.navigate(navigationStrings.PROFILE)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Image
                              source={imagePath.search}
                              style={{height:22,width:22,tintColor:colors.themeColor}}
 
                           
                              />
                            )}
                            label={() => (
                              <Text style={styles.textLable}>
                              Search User
                              </Text>
                         )}
                         onPress={() => {navigation.navigate(navigationStrings.SEARCH_BY_TEXT_INPUT)}}
                           
                        />
                        <DrawerItem 
                          icon={({color, size}) => (
                            <Image
                             source={imagePath.list}
                             style={{height:22,width:22,tintColor:colors.themeColor}}

                          
                             />
                        )}
                        label={() => (
                          <Text style={styles.textLable}>
                          User List
                          </Text>
                     )}
                     onPress={() => {navigation.navigate(navigationStrings.USER_SEARCH)}}
                        />
                        <DrawerItem 
                       icon={({color, size}) => (
                        <Image
                        source={imagePath.chart}
                        style={{height:22,width:22,tintColor:colors.themeColor}}

                     
                        />
                    )}
                    label={() => (
                       <Text style={styles.textLable}>
                        Charts
                       </Text>
                  )}
                            
                  onPress={() => {navigation.navigate(navigationStrings.CHARTS)}}     
                        />
                    </Drawer.Section>
                  
                </View>
                </DrawerContentScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
   
    },
    profileImage:{height:50,width:50,borderRadius:50},
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginVertical:5,
      color:colors.themeColor,
      fontFamily:fontFamily.bold,
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color:colors.themeColor,
      fontFamily:fontFamily.bold,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
     fontFamily:fontFamily.bold,
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor:colors.themeColor,
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    textLable:{
      color:colors.themeColor,
      fontFamily:fontFamily.medium
    }
  });