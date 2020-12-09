import React from 'react';
import {DefaultTheme} from '@react-navigation/native';

// https://reactnavigation.org/docs/themes/
const Theme = {
  dark: false,
  colors: {
    primary: 'yellow', // primary color of the app usedd to tunt various elements
    background: 'white', // the color of various backgrounds, like the screen background
    card: 'rgb(217,210,11)', // the background color of card-like elements, like header and tab bars
    text: 'black', // text color of various elements
    border: 'yellow', // color fo borders, like header border and tab bar border
    notification: 'rgb(255, 69, 58)', // color of tab navigation badge
  },
};

export default Theme;
