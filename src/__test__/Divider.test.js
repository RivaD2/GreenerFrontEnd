import React from 'react';
import renderer from 'react-test-renderer';
import Divider from '../../components/Card'
import Block from '../../components/Block';

import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { theme } from '../../constants';

let nottree = false;

test('renders correctly', () => {
  const tree = renderer.create(<Block>                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
    </Block>).toJSON();
  expect(tree).toBeTruthy();
});

test('renders correctly', () => {
  const tree = renderer.create(<Block>                    <Divider margin={[theme.sizes.base, theme.sizes.base * 2]} />
    </Block>).toJSON();
  expect(nottree).toBeFalsy();
});

export const styles = StyleSheet.create({
    divider: {
      height: 0,
      margin: theme.sizes.base * 2,
      borderBottomColor: theme.colors.gray2,
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
  })
