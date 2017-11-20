import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight,StyleSheet, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import { signup } from './signup';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      password:"",
      isVisiblity: true,

    };
  }
  onLogin=()=>{};
  onSignup  () {
    Actions.register();
  };


  render(){
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={{fontSize:30}}>Loginform</Text>
        <View>

          <TextInput placeholder="email" style={styles.textInput}
                     onChangeText={name => {
                       console.log(name);
                       this.setState({ name });
                     }}
                     value={this.state.name}

                     />
          <View>
          <TextInput placeholder="password" style={styles.textInput}
                     autoCorrect={false}
                     keyboardType={"email-address"}
                     secureTextEntry={this.state.isVisiblity}
                     onChangeText={password => {
                       this.setState({ password });
                     }}
                     value={this.state.password}/>
          </View>
        </View>
        <View style={styles.button}>
          <Button title={`SignIn`} onPress={this.onLogin} color='black'/>
        </View>
        <View style={styles.button}>
          <Button title={`SignUp`}  onPress={(this.onSignup.bind(this))} color='black'/>
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
};
const styles= StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f00"
  },
  textInput: {
    height: 40,
    width: 300,
    backgroundColor: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#123459',
  },
  button:{
    width: 300,
    height: 50,
    justifyContent: 'center',
    backgroundColor: "#fff",
    marginTop: 15,
  }
})

export default Login
