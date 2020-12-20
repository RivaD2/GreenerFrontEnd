import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../../components/Text';

let nottree = false;

test('renders correctly', () => {
  const tree = renderer.create(<Text>Hello</Text>).toJSON();
  expect(tree).toBeTruthy();
});

test('renders correctly', () => {
  const tree = renderer.create(<Text>Hello</Text>).toJSON();
  expect(nottree).toBeFalsy();
});
