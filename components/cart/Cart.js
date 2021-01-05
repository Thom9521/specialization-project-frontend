import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useIsFocused, useNavigation} from '@react-navigation/native';

import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const Cart = () => {
  // the navigation const from the useNavigation hook gives access to the parent navigation object
  const navigation = useNavigation();
  // used to re-render the screen when it's highlighted
  const isFocused = useIsFocused();

  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    const getData = async () => {
      const value = await AsyncStorage.getItem('userId');
      if (value !== null) {
        axios
          .get(`http://192.168.2.92/api/purchases/${value}`)
          .then((result) => {
            if (isMounted) {
              setProducts(result.data[1]);
              setAmount(result.data[0]);
              setLoading(false);
            }
          })
          .catch(function (error) {
            if (error.response) {
              console.log(error.response.data.message);
            }
          });
      } else {
        console.log('No token in storage');
      }
    };
    getData();
    return () => {
      isMounted = false;
    };
  }, [isFocused]);

  if (loading) {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>Loading...</Text>
      </View>
    );
  } else if (products.length === 0) {
    return (
      <View style={styles.emptyView}>
        <Text style={styles.emptyText}>You haven't bought anything {`:(`}</Text>
      </View>
    );
  } else {
    return products.map((product, index) => {
      const {ID, name, price, imagePath, description} = product; // destructuring
      return (
        <TouchableOpacity
          key={ID}
          onPress={() => navigation.navigate('ProductScreen', {productID: ID})} // passing the ID with params
        >
          <View style={styles.container}>
            <Text style={styles.name}>
              {/* using ID from products to pick the key from the amount array to get the right value */}
              {name}({amount[ID]})
            </Text>
            <Image source={{uri: imagePath}} style={styles.img} />
          </View>
        </TouchableOpacity>
      );
    });
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '15%',
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
  emptyView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Cart;
