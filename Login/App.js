
import { StyleSheet, NavigatorIOS, Navigator } from 'react-native';

import React, { Component } from 'react';
import { Router, Scene, map, Stack  } from 'react-native-router-flux';

import Login from './Login';
import signup from './signup';


// create a component
class abc extends Component{
 /* renderScene (route, navigator) {
    return <route.component navigator={navigator} />
  }*/
  render(){
  return (

    <Router>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login"/>
        <Scene key="register" component={signup} title="Register"/>

      </Scene>
    </Router>
  );};
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default abc;



/*
import App from './src/app';
export default App;
*/
