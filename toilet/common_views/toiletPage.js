import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import TWebView from './tWebView';

const nearByURL = './../html/nearby.html';
class ToiletPage extends Component {
	render(){
		return(
			<TWebView url='{nearByURL}' />
		);
	}
}

module.exports = ToiletPage;