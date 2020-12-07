import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import GetProducts from './GetProducts';

import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

const Products = ({navigation, route}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.title}>Products</Text>
      </View>
      {/* <Text>{route.params.name}</Text> */}
      <View style={styles.productsContainer}>
        <GetProducts />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default Products;
