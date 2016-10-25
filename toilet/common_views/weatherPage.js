import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default  class WeatherPage extends Component {
	render(){
		return(
			<View style={styles.view}>
				<Text style = {styles.text}>weatherPage</Text>
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