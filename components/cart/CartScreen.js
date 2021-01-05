import React from 'react';
import lemonbackground from '../../assets/lemonbackground3.png';
import Cart from './Cart';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const CartScreen = () => {
  return (
    <ImageBackground source={lemonbackground} style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Cart</Text>
        </View>
        <View style={styles.cartView}>
          <Cart />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  titleView: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    color: 'black',
  },
  cartView: {
    paddingTop: '5%',
  },
});

export default CartScreen;
