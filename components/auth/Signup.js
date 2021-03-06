import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import axios from 'axios';
import lemonbackground from '../../assets/lemonbackground3.png';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';

var dimWidth = Dimensions.get('window').width; //full width
var dimHeight = Dimensions.get('window').height; //full height

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const formData = {name: name, email: email, password: password};

  const handleSubmit = (e) => {
    if (name != '' && email != '' && password != '') {
      if (password != confirmPassword) {
        Alert.alert('Try again!', 'Your passwords do not match!', [
          {
            text: 'OK',
          },
        ]);
      }
      if (password == confirmPassword) {
        e.preventDefault();
        console.log(formData);
        axios
          .post('http://192.168.2.92/api/users', formData)
          .then(function (response) {
            console.log(response.data);
            Alert.alert('Success!', 'Your account has been created!', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Login'),
              },
            ]);
          })
          .catch(function (error) {
            if (error.response) {
              var errorMessage = '';
              if (error.response.data.errors.email) {
                errorMessage = error.response.data.errors.email.toString();
              } else if (error.response.data.errors.password) {
                errorMessage = error.response.data.errors.password.toString();
              }
              Alert.alert('Try again!', errorMessage, [
                {
                  text: 'OK',
                },
              ]);
            }
          });
      }
    } else {
      Alert.alert('Try again!', 'Fill in values please', [
        {
          text: 'OK',
        },
      ]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={lemonbackground} style={styles.backgroundImage}>
        <View style={styles.titleView}>
          <Text style={styles.welcomeText}>Sign Up</Text>
        </View>
        <View style={styles.inputViews}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Name..."
              onChangeText={(name) => setName(name)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email..."
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Password..."
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Confirm Password..."
              secureTextEntry={true}
              onChangeText={(confirmPassword) =>
                setConfirmPassword(confirmPassword)
              }
            />
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
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

export default Signup;
