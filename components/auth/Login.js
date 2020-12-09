import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import axios from 'axios';
import lemonbackground from '../../assets/lemonbackground3.png';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

var dimWidth = Dimensions.get('window').width; //full width
var dimHeight = Dimensions.get('window').height; //full height

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground source={lemonbackground} style={styles.backgroundImage}>
        <View style={styles.titleView}>
          <Text style={styles.welcomeText}>Login</Text>
        </View>
        <View style={styles.inputViews}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              keyboardType="email-address"
              onChange={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Password..."
              secureTextEntry={true}
              onChange={(password) => setPassword(password)}
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Signup', {name: 'SignupPage'})}>
            <Text style={styles.signupText}>Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: dimWidth,
    height: dimHeight,
  },
  titleView: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 36,
    color: 'black',
  },
  inputViews: {
    marginTop: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputView: {
    backgroundColor: 'rgb(209, 206, 105)',
    width: 250,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  inputText: {
    color: 'black',
    fontSize: 16,
    flex: 1,
    width: '100%',
    textAlign: 'center',
  },
  buttonView: {
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgb(217,210,11)',
    width: 170,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
  signupText: {
    marginTop: 10,
    fontSize: 17,
  },
});

export default Login;
