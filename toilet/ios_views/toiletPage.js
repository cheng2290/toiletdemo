import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  WebView
} from 'react-native';

import TWebView from './tWebView';
class ToiletPage extends Component {
	render(){
		return(
			<TWebView url='file:///Users/zhuxiaocheng/php/ReactNative/toilet/toilet/html/nearby.html' />
		);
	}
}

module.exports = ToiletPage;