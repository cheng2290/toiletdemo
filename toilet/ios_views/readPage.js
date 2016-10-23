import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

export default  class ReadPage extends Component {
	render(){
		return(
			<View style={styles.view}>
				<Text style = {styles.text}>readPage</Text>
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
AppRegistry.registerComponent('readPage',()=>readPage);