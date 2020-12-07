import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import axios from 'axios';

import {View, Text, Button, Image, StyleSheet} from 'react-native';

const GetProduct = ({navigation, productID}) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios(
        `http://192.168.2.92/api/products/${productID}`, // acessesing the route with the productID props
      );
      setProduct(result.data);
    };
    fetchProduct();
  }, []);

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  price: {
    fontSize: 20,
    color: '#85bb65',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default GetProduct;
