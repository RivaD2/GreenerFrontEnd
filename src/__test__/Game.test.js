import React from 'react';
import renderer from 'react-test-renderer';
import Game from '../../components/Game';

let nottree = false;

test('renders correctly', () => {
  const tree = renderer.create(<><Game/></>).toJSON();
  expect(tree).toBeTruthy();
});

// test('renders correctly', () => {
//   const tree = renderer.create(<><Button>Hello</Button></>).toJSON();
//   expect(nottree).toBeFalsy();
// });