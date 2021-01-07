import React from 'react';
import lemonbackground from '../../assets/lemonbackground3.png';
import Receipt from './Receipt';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const ReceiptScreen = () => {
  return (
    <ImageBackground source={lemonbackground} style={styles.background}>
      <ScrollView style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Receipt</Text>
        </View>
        <View style={styles.receiptView}>
          <Receipt />
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
  receiptView: {
    paddingTop: '5%',
  },
});

export default ReceiptScreen;
