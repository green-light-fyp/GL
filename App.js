/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View,  StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props>{
componentDidMount(){
SplashScreen.hide();
}
  render() {

    return (
      <View style={styles.container}>
        <StatusBar 
        backgroundColor="#8bc34a"
        barStyle="light-content" 
        />
        <Text style={styles.welcome}>HELLO WORLD!
        </Text>

      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffdd0',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#8bc34a'
  },
  instructions: {
    textAlign: 'center',
    color:  '#8bc34a',
    marginBottom: 5,
  },
});
