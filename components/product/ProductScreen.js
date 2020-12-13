import React from 'react';
import Product from './Product';
import lemonbackground from '../../assets/lemonbackground3.png';

import {View, StyleSheet, ImageBackground} from 'react-native';

const ProductScreen = ({route, navigation}) => {
  // getting the productID from the route params so i can pass it to the child component through props
  const {productID} = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground source={lemonbackground} style={styles.backgroundImage}>
        <Product productID={productID} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    resizeMode: 'repeat',
    width: '100%',
  },
});

export default ProductScreen;
