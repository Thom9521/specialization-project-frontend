import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Products = () => {
  // navigation constant from the useNavigation hook gives acces to the parent navigation object
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios(`http://192.168.2.92/api/products`);
      setProducts(result.data);
    };
    fetchProducts();
  }, []);

  return products.map((product, index) => {
    const {ID, name, price, imagePath, description} = product; // destructuring
    return (
      <View style={styles.container} key={ID}>
        <Text style={styles.name}>{name}</Text>
        <Image source={{uri: imagePath}} style={styles.img} />
        <Text style={styles.price}>{price}$</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ProductScreen', {productID: ID})} // passing the ID with params
        >
          <Text style={styles.buttonText}>SEE DETAILS</Text>
        </TouchableOpacity>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
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

export default Products;
