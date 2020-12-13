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
import Theme from './components/Theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Lemonade Webshop'}}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={{title: 'All Products'}}
        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
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
