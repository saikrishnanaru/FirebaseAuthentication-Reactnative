import React, { Component } from 'react';
import { View,TextInput,Text,Alert } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner,Card ,CardSection,Input } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null, text:'' };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBzdqF7uM0je9wJEz2dcwAcB4JfE1JuPN4',
      authDomain: 'login-a663d.firebaseapp.com',
      databaseURL: 'https://login-a663d.firebaseio.com',
      storageBucket: 'login-a663d.appspot.com',
      messagingSenderId: '870153380680'
    });


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  onButton(){
    const { text } =this.state;
    let userID = firebase.auth().currentUser;
  //  alert(userID.uid);
    let path = "users/"+ userID.uid + "/details"
    const usersConst = firebase.database().ref(path).push();
    let msg = {name:"sai",
      age:25,
      email:"sai@gmail.com"}
    usersConst.set(msg)
  //  firebase.database().ref(path).set();
    // firebase.database().ref(path).set({age:25});
    //firebase.database().ref(path).set({email:"sai@gmail.com"});

      }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Input
                placeholder="EnterCollegeNasme"
                label="College"
               value={this.state.text}
               onChangeText={text =>this.setState({ text })}
               style ={{ height:20,width: 100}}
              />
            </CardSection>

            <CardSection>
              <Button onPress={this.onButton.bind(this)} >Save</Button>
            </CardSection>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
