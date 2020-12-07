import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import GetProduct from './GetProduct';

import {View, Text, Button, Image, StyleSheet} from 'react-native';

const Product = ({route, navigation}) => {
  // getting the productID from the route params so i can pass it to the child component through props
  const {productID} = route.params;
  return (
    <View>
      <GetProduct productID={productID} />
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

export default Product;
