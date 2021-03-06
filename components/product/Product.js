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
  const moneyDecrease = {money: me.money - product.price};
  const [purchaseInfo, setPurchaseInfo] = useState({
    userId: '',
    productId: '',
  });
  const isFocused = useIsFocused();

  useEffect(() => {
    let isMounted = true;
    const fetchProduct = () => {
      axios(
        `http://192.168.2.92/api/products/${productID}`, // acessesing the route with the productID props
      ).then((result) => {
        if (isMounted) {
          setProduct(result.data);
          setPurchaseInfo((prevState) => ({
            ...prevState,
            productId: productID,
          }));
        }
      });
    };

    fetchProduct();
    return () => {
      isMounted = false;
    };
  }, [isFocused]);

  useEffect(() => {
    let isMounted = true;
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
              if (isMounted) {
                setMe(result.data);

                setPurchaseInfo((prevState) => ({
                  ...prevState,
                  userId: result.data.id,
                }));
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
      } catch (e) {
        console.log('Something went wrong with getting the storage value');
      }
    };

    getData();
    return () => {
      isMounted = false;
    };
  }, [isFocused]);

  const updateUser = () => {
    axios
      .put(`http://192.168.2.92/api/users/${me.id}`, moneyDecrease)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data.message);
        }
      });
  };
  const addPurchase = () => {
    axios
      .post(`http://192.168.2.92/api/purchases`, purchaseInfo)
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
    if (me.email === '') {
      Alert.alert('Failed!', 'You need to be registered to buy products.', [
        {
          text: 'OK',
          onPress: () => console.log('Alert closed'),
        },
      ]);
    } else {
      if (me.money - product.price >= 0) {
        updateUser();
        addPurchase();
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
        Alert.alert('Failed!', 'You need more money!', [
          {
            text: 'OK',
            onPress: () => console.log('Alert closed'),
          },
        ]);
      }
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
