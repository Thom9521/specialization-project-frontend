import React, {useState, useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';

const Product = ({productID}) => {
  const [product, setProduct] = useState({});
  const [me, setMe] = useState({email: '', id: '', name: '', money: 0});
  const formData = {money: me.money - product.price};

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios(
        `http://192.168.2.92/api/products/${productID}`, // acessesing the route with the productID props
      );
      setProduct(result.data);
    };
    fetchProduct();
  }, []);

  const isFocused = useIsFocused();
  useEffect(() => {
    const getData = async () => {
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

  const updateUser = () => {
    axios
      .put(`http://192.168.2.92/api/users/${me.id}`, formData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data.message);
        }
      });
  };

  const buyProduct = () => {
    if (me.money - product.price >= 0) {
      updateUser();
      setMe({...me, money: me.money - product.price});
      Alert.alert(
        'Success!',
        `The ${product.name} was bought! \n\nYou new balance is ${
          me.money - product.price
        }$`,
        [
          {
            text: 'OK',
            onPress: () => console.log('Alert closed'),
          },
        ],
      );
    } else {
      Alert.alert('Failed', 'You need more money!', [
        {
          text: 'OK',
          onPress: () => console.log('Alert closed'),
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Image source={{uri: product.imagePath}} style={styles.img} />
      <Text style={styles.description}>{product.description}</Text>

      <TouchableOpacity style={styles.button} onPress={buyProduct}>
        <Text style={styles.buttonText}>Buy for {product.price}$</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    marginBottom: 20,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'rgb(217,210,11)',
    width: 130,
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

export default Product;
