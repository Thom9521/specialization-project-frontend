import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import axios from 'axios';

import {View, Text, Button, Image, StyleSheet, Alert} from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Image source={{uri: product.imagePath}} style={styles.img} />
      <Text style={styles.description}>{product.description}</Text>
      <Button
        title={`Buy for ${product.price}$`}
        onPress={() => {
          Alert.alert('Success!', `The ${product.name} was bought!`, [
            {
              text: 'OK',
              onPress: () => console.log('Alert closed'),
            },
          ]);
        }}
      />
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
    color: '#85bb65',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 50,
  },
});

export default GetProduct;
