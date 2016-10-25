import React, { Component } from 'react';
import {
    PixelRatio,
    Dimensions,
    ActivityIndicatorIOS
} from 'react-native';
module.exports = {
    navigationHeight: 44,
    navigationBarBgColor: '#3497FF',
    statusBarHeight: 20,
    /*最小线宽*/
    pixel: 1 / PixelRatio.get(),

    /**屏幕尺寸*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    /**
     * 基于fetch的get方法
     * @param url
     * @param successCallback
     * @param failCallback
     */
    get: function (url, successCallback, failCallback) {
        fetch(url).then((response) => response.text())
            .then((responseText) => {successCallback(JSON.parse(responseText))})
            .catch(function (err) {
                failCallback(err);
            })
    },
    /**loading效果*/
    loading: <ActivityIndicatorIOS color:"#3E00FF" style={{marginTop:40}}/>
};

