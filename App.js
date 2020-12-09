import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import Products from './components/products/Products';
import Product from './components/product/Product';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

import Theme from './components/Theme';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{title: 'All Products'}}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{title: 'Single Product'}}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
