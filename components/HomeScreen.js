import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.welcomeText}>Lemonade Webshop</Text>
      </View>
      <View style={styles.btnsView}>
        <Button
          title="Go to products"
          onPress={() => navigation.navigate('Products', {name: 'ProductPage'})}
        />
        <Button
          title="Go to products"
          onPress={() => navigation.navigate('Products', {name: 'ProductPage'})}
        />
        <Button
          title="Go to products"
          onPress={() => navigation.navigate('Products', {name: 'ProductPage'})}
        />
      </View>
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
  },
  btnsView: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
