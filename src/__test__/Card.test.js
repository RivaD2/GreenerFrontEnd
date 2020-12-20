import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../components/Card';

let nottree = false;

test('renders correctly', () => {
  const tree = renderer.create(<Card>Hello</Card>).toJSON();
  expect(tree).toBeTruthy();
});

test('renders correctly', () => {
  const tree = renderer.create(<Card>Hello</Card>).toJSON();
  expect(nottree).toBeFalsy();
});