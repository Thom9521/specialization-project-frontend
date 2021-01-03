import React from 'react';

// navigation imports
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// components import
import HomeScreen from './components/HomeScreen';
import ProductsScreen from './components/products/ProductsScreen';
import ProductScreen from './components/product/ProductScreen';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import CartScreen from './components/cart/CartScreen';
import Theme from './components/Theme';

import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

const App = ({}) => {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerTitle: 'Lemonade Webshop',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CartScreen')}
                style={{paddingRight: 5}}>
                <Icon name="shopping-cart" size={30} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={({navigation}) => ({
            headerTitle: 'All Products',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CartScreen')}
                style={{paddingRight: 5}}>
                <Icon name="shopping-cart" size={30} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={({navigation}) => ({
            headerTitle: 'Single Product',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CartScreen')}
                style={{paddingRight: 5}}>
                <Icon name="shopping-cart" size={30} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{title: 'Sign Up'}}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{title: 'Cart'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
