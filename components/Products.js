import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import axios from 'axios';
import GetProducts from './GetProducts';

import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';

const Products = ({navigation, route}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios(`http://192.168.2.92:80/backend/api/read.php`);
      setProducts(result.data);
    };
    fetchProducts();
  }, []);

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
