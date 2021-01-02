import React from 'react';
import lemonbackground from '../../assets/lemonbackground3.png';
import Cart from './Cart';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={lemonbackground}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.titleView}>
          <Text style={styles.welcomeText}>Cart</Text>
        </View>
        <View>
          <Cart />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 36,
    color: 'black',
  },
});

export default CartScreen;
