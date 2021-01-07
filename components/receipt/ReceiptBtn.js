import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const ReceiptBtn = () => {
  // the navigation const from the useNavigation hook gives access to the parent navigation object
  const navigation = useNavigation();

  const [token, setToken] = useState('');

  const getToken = async () => {
    const value = await AsyncStorage.getItem('token');
    setToken(value);
  };
  getToken();

  return (
    <View>
      {token != null && (
        <TouchableOpacity
          onPress={() => navigation.navigate('ReceiptScreen')}
          style={{paddingRight: 5}}>
          <Icon name="receipt" size={30} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ReceiptBtn;
