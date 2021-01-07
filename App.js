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
import ReceiptScreen from './components/receipt/ReceiptScreen';
import ReceiptBtn from './components/receipt/ReceiptBtn';
import Theme from './components/Theme';

const Stack = createStackNavigator();

const App = ({}) => {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Lemonade Webshop',
            headerRight: () => <ReceiptBtn />,
          }}
        />
        <Stack.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={{
            headerTitle: 'All Products',
            headerRight: () => <ReceiptBtn />,
          }}
        />
        <Stack.Screen
          name="ProductScreen"
          component={ProductScreen}
          options={{
            headerTitle: 'Single Product',
            headerRight: () => <ReceiptBtn />,
          }}
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
          name="ReceiptScreen"
          component={ReceiptScreen}
          options={{title: 'Receipt'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
