import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';



import actions from '../../redux/actions';
import styles from './styles';
import { locationPermission } from '../../utils/permissions';
import ButtonWithLoader from '../../Component/ButtonWithLoader';
import fontFamily from '../../styles/fontFamily';

import colors from '../../styles/colors';
import ItemList from '../../Component/ItemList';
import imagePath from '../../constants/imagePath';
import Header from '../../Component/Header';
import WrapperContainer from '../../Component/WrapperContainer';
import strings from '../../constants/lang';

export default class SearchByTextInput extends Component {
  state = [(searchInput = ''), (data = []), (isLoading = false),isSearching=true]
  
  apiCall = () => {
    const {searchInput} = this.state;
    this.setState({
      isLoading: true,
     
    });

    actions
      .userNearMe(searchInput)
      .then(res => {
        searchItem = res.data;
        this.setState({
          data: searchItem,
          isLoading: false,
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoading: false,
          data: [],
        });
      });
  };
  _onChangeText = key => {
    this.setState({
      searchInput: key,
    });
    if (this.setTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.apiCall();
    }, 600);
  };

//   findNearMe=()=>{
//     locationPermission().then(res=>{
//         Geolocation.getCurrentPosition(
//             (position) => {
//               console.log(position);
//               let {longitude,latitude}=position.coords;
//               this.setState({
//                   isLoading:true,
//               });
//               actions.nearByUsers(longitude,latitude).then(res=>{
//                   this.setState({
//                      nearUserMe:res.data,
//                       isLoading:false
//                   })
//               }).catch(error=>{
//                   this.setState({
//                       isLoading:false,
//                   })
//               })
//             },
//             (error) => {
//               // See error code charts below.
//               console.log(error.code, error.message);
//             },
//             { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//         ).catch(error=>{
//             console.log(error,"error message")
//         })
//     })
       
      
//   }
  render() {
    console.log(this.state.searchInput);
    const {data, isLoading,nearUserMe,isSearching} = this.state;
    return (
      <WrapperContainer>
        <View style={{flex: 1}}>
          <Header headerText={'Search Users'} />
          <View style={styles.searchBarView}>
            <Image
              source={imagePath.search}
              style={styles.searchIcon}
              resizeMode="contain"
            />
            <TextInput
              style={styles.searcTextInput}
              placeholder={strings.SEARCH_HERE}
              onChangeText={this._onChangeText}/>
            
               
               
        { isLoading?
          
           <ActivityIndicator size="small" color={colors.themeColor} style={styles.activity} />:<></>
        }
        
                
               
            


          </View>
          {/* <ButtonWithLoader btnText={strings.FIND_NEAR} onPress={this.findNearMe} isLoading={isLoading}
              btnTextStyle={{fontFamily:fontFamily.bold}}
            /> */}
          <FlatList
            data={data}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            onEndReached={this._onEndReached}
            ListFooterComponent={this._listfooterComponent}
            ItemSeparatorComponent={this._itemSeparatorComponent}
            renderItem={({item, index}) => {
              return <ItemList data={item} btnText={'connect'} />;
            }}
          />
          {/* <Loader isLoading={isLoading} /> */}
        </View>
      </WrapperContainer>
    );
  }
}
