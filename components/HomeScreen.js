import React from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import lemonbackground from '../assets/lemonbackground3.png';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={lemonbackground}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.titleView}>
          <Text style={styles.welcomeText}>Lemonade Webshop</Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Products', {name: 'ProductPage'})
            }>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Products', {name: 'ProductPage'})
            }>
            <Text style={styles.buttonText}>PRODUCTS</Text>
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
  titleView: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 36,
    color: 'black',
  },
  buttonView: {
    flex: 0.5,
    marginTop: 150,
    justifyContent: 'space-between',
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
});

export default HomeScreen;
