
import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator,RefreshControl} from 'react-native';

import Header from '../../Component/Header';
import ItemList from '../../Component/ItemList';
import Loader from '../../Component/Loader';
import WrapperContainer from '../../Component/WrapperContainer';
import actions from '../../redux/actions';




const  page= 2;
export default class Consult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skip: 0,
      isLoading: true,
      isListEnd:false,
      data: [],
      isRefresh:false,
      refreshing: false,
    };
    console.disableYellowBox = true;
  }
  componentDidMount() {
   
    this.onApiCall();
  }
  onApiCall = (onEndReachCall = false) => {
    const {skip, data,} = this.state;

    let skipCount = onEndReachCall ? skip + data.length : 0;

    actions
      .displayList({
        searchType: 'LEADERBOARD',
        limit: page,
        skip: skipCount.toString(),
      })
      .then(res => {
        if(res.data.length >0){
          let item = [...this.state.data, ...res.data];
          this.setState({
            data: item,
            isLoading: false,
          });
        }else{
          this.setState({
             isListEnd:true,
             isLoading:false
          });
        }
       
      })
      .catch(error => {
        this.setState({
          isLoading: false,
        });
      });
  };

  _itemSeparatorComponent = () => {
    return <View style={{height:5}}></View>;
  };
  _onEndReached = () => {
    const{isLoading,isListEnd}=this.state
    if(isLoading || isListEnd){
      return 
    }
    else{
      this.setState({
        isLoading:true
      })
      this.onApiCall(true);

    }
   
  };

  _listfooterComponent = () => {
    const {isLoading} = this.state;
    return <Loader isLoading={isLoading}/>;
  };
  _onRefresh=()=>{
      this.setState({isRefresh:true,isListEnd:false})
      actions
      .displayList({
        searchType: 'LEADERBOARD',
        limit:2,
        skip:0,
      }).then((res)=>{
          this.setState({isRefresh:false,data:res.data})
      }).catch(error=>{
          this.setState({isRefresh:false})
      })

  }

  render() {
    const {data,refreshing} = this.state;

    return (
     <WrapperContainer>
        <View style={{flex: 1}}>
        <Header headerText={"Users"} />

        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          }
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          onEndReached={this._onEndReached}
          ListFooterComponent={this._listfooterComponent}
          ItemSeparatorComponent={this._itemSeparatorComponent}
          renderItem={({item, index}) => {
            return <ItemList data={item} btnText={"connect"} />;
          }}
        />
      </View>
     </WrapperContainer>
    );
  }
}