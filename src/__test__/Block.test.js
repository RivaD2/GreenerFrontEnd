import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../components/Card'
import Block from '../../components/Block';
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";
import { theme } from '../../constants';


let nottree = false;

test('renders correctly', () => {
  const tree = renderer.create(<Block center middle><Card>Hello</Card></Block>).toJSON();
  expect(tree).toBeTruthy();
});

test('renders correctly', () => {
  const tree = renderer.create(<Block flex={false} row center space="between" style={styles.header}></Block>).toJSON();
  expect(tree).toBeTruthy();
});

test('renders correctly', () => {
  const tree = renderer.create(<Block flex={false} row center space="between" style={styles.header}></Block>).toJSON();
  expect(tree).toBeTruthy();
});

export const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  card: {
    borderRadius: theme.sizes.radius
  },
  center: {
    alignItems: "center"
  },
  middle: {
    justifyContent: "center"
  },
  left: {
    justifyContent: "flex-start"
  },
  right: {
    justifyContent: "flex-end"
  },
  top: {
    justifyContent: "flex-start"
  },
  bottom: {
    justifyContent: "flex-end"
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2
  },
  accent: { backgroundColor: theme.colors.accent },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  black: { backgroundColor: theme.colors.black },
  white: { backgroundColor: theme.colors.white },
  gray: { backgroundColor: theme.colors.gray },
  gray2: { backgroundColor: theme.colors.gray2 }
});
