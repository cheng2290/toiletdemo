import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

 class TWebView extends Component{
	constructor(props){
		super(props);
		this.state = {
			url: this.props.url,
			isShowErrorPage:false
		};
	}
	render(){
		return(
			<View style={styles.container}>
				{  
					this.state.isShowErrorPage?
			            <View style={styles.errorInfo}>
			              <Text style={styles.text}>不好意思,请检查网络连接情况或者报告错误</Text>
			            </View>
		            :
			            <WebView
			              style={[styles.container,{marginTop: this.state.isMargin || -20}]}
			              startInLoadingState={true}
			              // onError={this._loadError.bind(this)}
			              source={{uri:this.state.url}}>
			            </WebView>
				}	
			</View>
		);
	}
	_loadError(){
		this.setState({
			isShowErrorPage:true
		});
	}
}
var styles = StyleSheet.create({
	container:{
		flex:1
	},
	errorInfo:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	text:{
		fontSize:16,
		fontWeight:'300'
	}
});
module.exports = TWebView;