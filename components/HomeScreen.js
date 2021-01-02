import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import lemonbackground from '../assets/lemonbackground3.png';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  const [me, setMe] = useState({email: '', id: '', name: '', money: 0});

  const isFocused = useIsFocused();
  useEffect(() => {
    const getData = async () => {
      const isMounted = true;
      try {
        const value = await AsyncStorage.getItem('token');
        if (value !== null) {
          const headers = {
            'Content-Type': 'Application/json',
            Authorization: 'Bearer ' + value,
          };
          axios
            .get(`http://192.168.2.92/api/me`, {
              headers,
            })
            .then((result) => {
              setMe(result.data);
              AsyncStorage.setItem('userId', me.id.toString());
            })
            .catch(function (error) {
              if (error.response) {
                console.log(error.response.data.message);
              }
            });
        } else {
          console.log('No token in storage');
        }
      } catch (e) {
        console.log('Something went wrong with getting the storage value');
      }
    };

    getData();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={lemonbackground}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.titleView}>
          <Text style={styles.welcomeText}>Welcome {me.name}</Text>
          {me.name != '' && (
            <Text style={styles.moneyText}>
              You current balance is:{' '}
              <Text style={styles.priceText}>{me.money}$</Text>
            </Text>
          )}
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('ProductsScreen')}>
            <Text style={styles.buttonText}>Products</Text>
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
  moneyText: {
    fontSize: 20,
    marginTop: 30,
  },
  priceText: {
    color: 'green',
  },
  buttonView: {
    flex: 0.5,
    marginTop: 120,
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
