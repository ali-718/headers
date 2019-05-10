import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import { Icon } from 'native-base';
import Logo from '../Assets/Images/logo.png';

export default class Header extends Component {
  render() {
    return (
      <View style={{height:50,width:"100%",flexDirection:"row"}}>
        <View style={{height:50,flexGrow:1,alignItems:"flex-start",justifyContent:"center",marginLeft:10}}>
            <Icon name="bars" type="FontAwesome" />
        </View>
        <View style={{flexGrow:1,height:50,alignItems: 'center',justifyContent: 'center',}}>
            <Image source={Logo} style={{width:110,height:40}} />
        </View>
        <View style={{height:50,flexGrow:1,flexDirection:'row',alignItems:"center",justifyContent:"flex-end",marginRight:10}}>
            <Icon name="envelope" type="FontAwesome" />
            <Icon name="envelope" type="FontAwesome" style={{marginLeft: 10,}}/>
        </View>
      </View>
    )
  }
}
