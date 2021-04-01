import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, Image} from 'react-native';
import React from 'react';

import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import {Homepage, Profile, UserSearch,UserNearMe} from '../Screen';
import colors from '../styles/colors';


const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name={navigationStrings.USER_SEARCH} component={UserSearch}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ? colors.themeColor : 'black',
                fontSize: 12,
              }}>
              List
            </Text>
          ),

          tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.search}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
        }}
      />
      <Tab.Screen name={navigationStrings.USER_NEAR_ME} component={UserNearMe}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ? colors.themeColor : 'black',
                fontSize: 12,
              }}>
              Search
            </Text>
          ),

          tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.search}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
        }}
      />
      <Tab.Screen name={navigationStrings.HOMEPAGE} component={Homepage}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ? colors.themeColor : 'black',
                fontSize:12,
              }}>
             Add
            </Text>
          ),

          tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.plus}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
        }}
      />
      <Tab.Screen name={navigationStrings.PROFILE} component={Profile}
        options={{
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ? colors.themeColor : 'black',
                fontSize:12,
              }}>
              Profile
            </Text>
          ),

          tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.profile}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default TabRoutes;
