import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import axios from 'axios';

import {View, Text, Button, Image, StyleSheet} from 'react-native';

const GetProducts = ({}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios(
        `http://192.168.2.92:80/backend/api/products.php`,
      );
      setProducts(result.data);
    };
    fetchProducts();
  }, []);

  return products.map((product, index) => {
    const {id, name, price, imagePath, description} = product; // destructuring
    return (
      <View style={styles.container} key={id}>
        <Text style={styles.title}>{name}</Text>
        {/* <Text style={styles.price}>{price}$</Text> */}
        <Image source={{uri: imagePath}} style={styles.img} />
        {/* <Text style={styles.description}>{description}</Text> */}
        <Text style={styles.price}>{price}$</Text>
        <Button title="See details" />
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

export default GetProducts;
