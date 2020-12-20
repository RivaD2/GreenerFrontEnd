import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../components/Card'
import Block from '../../components/Block';
import Game from '../../components/Game';

let nottree = false;

test('renders correctly', () => {
  const tree = renderer.create(<Block><Game /></Block>).toJSON();
  expect(tree).toBeTruthy();
});

test('renders correctly', () => {
  const tree = renderer.create(<Block><Card>Hello</Card></Block>).toJSON();
  expect(nottree).toBeFalsy();
});