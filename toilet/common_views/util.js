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
    /*��С�߿�*/
    pixel: 1 / PixelRatio.get(),

    /**��Ļ�ߴ�*/
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    /**
     * ����fetch��get����
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
    /**loadingЧ��*/
    loading: <ActivityIndicatorIOS color:"#3E00FF" style={{marginTop:40}}/>
};

