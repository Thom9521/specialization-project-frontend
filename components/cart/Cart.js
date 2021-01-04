import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const Cart = () => {
  // navigation constant from the useNavigation hook gives acces to the parent navigation object
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      const value = await AsyncStorage.getItem('userId');
      if (value !== null) {
        axios
          .get(`http://192.168.2.92/api/purchases/${value}`)
          .then((result) => {
            if (isMounted) {
              setProducts(result.data[1]);
              setAmount(result.data[0]);
            }
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data.message);
            }
          });
      } else {
        console.log('No token in storage');
      }
    };
    getData();
    return () => {
      isMounted = false;
    };
  }, [isFocused]);

  return products.map((product, index) => {
    const {ID, name, price, imagePath, description} = product; // destructuring
    return (
      <TouchableOpacity
        key={ID}
        onPress={() => navigation.navigate('ProductScreen', {productID: ID})} // passing the ID with params
      >
        <View style={styles.container}>
          {/* <Text style={styles.amount}>{amount[ID]}</Text> */}
          <Text style={styles.name}>
            {name}({amount[ID]})
          </Text>
          <Image source={{uri: imagePath}} style={styles.img} />
        </View>
      </TouchableOpacity>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '15%',
    width: '100%',
    height: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 150 / 2,
  },
  amount: {fontWeight: 'bold', fontSize: 16},
});

export default Cart;
