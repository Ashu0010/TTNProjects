import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


export default class WebViewLoading extends Component {
  LoadingWebView() {
    return (
      <ActivityIndicator
        color='#00ff00'
        size="large"
        style={styles.activityIndicator}
      />
    );
  }
  render() {
    return (
      <WebView
        style={styles.web}
        renderLoading={this.LoadingWebView}
        startInLoadingState={true}
        source={{ uri: 'https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_16 ' }}
      />
    );
  }
}
const styles = StyleSheet.create({
  activityIndicator: {
    justifyContent: 'center',
    height: '100%',
  },
  web: {
    flex: 1,
  }

})