import React from 'react';
import renderer from 'react-test-renderer';
import Badge from '../../components/Card'
import Block from '../../components/Block';
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

let nottree = false;
let image = 'https://t3.ftcdn.net/jpg/03/28/95/96/360_F_328959628_wNwcdlXCtnsl8mkr8syUmkG9zYMw5fes.jpg';

test('renders correctly', () => {
  const tree = renderer.create(<Block><Badge
    margin={[0, 0, 15]}
    size={50}
    color="rgba(41,216,143,0.20)"
    >
    <Image source={require('../../assets/images/avatar.png')} />
    </Badge></Block>).toJSON();
  expect(tree).toBeTruthy();
});

test('renders correctly', () => {
  const tree = renderer.create(<Block><Badge
    margin={[0, 0, 15]}
    size={50}
    color="rgba(41,216,143,0.20)"
    >
   <Image source={require('../../assets/images/avatar.png')} />
    </Badge></Block>).toJSON();
  expect(nottree).toBeFalsy();
});