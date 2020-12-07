import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import GetProduct from './GetProduct';

import {View, Text, Button, Image, StyleSheet} from 'react-native';

const Product = ({route, navigation}) => {
  // getting the productID from the route params so i can pass it to the child component through props
  const {productID} = route.params;
  return (
    <View style={styles.container}>
      <GetProduct productID={productID} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleView: {
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default Product;
