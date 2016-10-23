import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

export default class SettingPage extends Component {
	render(){
		return(
			<View style={styles.view}>
				<Text style = {styles.text}>settingPage</Text>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	view:{
		flex:1,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	text:{
		fontSize:60
	}
});