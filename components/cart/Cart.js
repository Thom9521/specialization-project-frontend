import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';

const Cart = () => {
  // navigation constant from the useNavigation hook gives acces to the parent navigation object
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('userId');
        if (value !== null) {
          axios
            .get(`http://192.168.2.92/api/purchases/${value}`)
            .then((result) => {
              setProducts(result.data);
              console.log(result.data);
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

  return products.map((product, index) => {
    const {ID, name, price, imagePath, description} = product; // destructuring
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductScreen', {productID: ID})} // passing the ID with params
      >
        <View style={styles.container} key={ID}>
          <Text style={styles.name}>{name}</Text>
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
    paddingHorizontal: '20%',
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
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'rgb(217,210,11)',
    width: 150,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
  },
});

export default Cart;
