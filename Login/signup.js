import React,{ Component } from 'react';
import { StyleSheet,View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      password: this.props.password
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          Welcome {this.props.name}!
        </Text>
        <Text style={styles.subheading}>
          Your password is {this.props.password}
        </Text>
      </View>
    );
  }

};
const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  },
  heading: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565"
  },
  subheading: {
    color: "#cccccc"
  }
});
module.exports = signup;
