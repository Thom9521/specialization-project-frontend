import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.welcomeText}>Lemonade Webshop</Text>
      </View>
      <Button
        title="Go to products"
        onPress={() => navigation.navigate('Products', {name: 'ProductPage'})}
      />
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
});

export default HomeScreen;
