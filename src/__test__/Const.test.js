import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../../components/Card'
import Block from '../../components/Block';
import {categories,
explore,
products,
profile,
plants1,
plants2,
categories2,
shopPlants} from '../../constants/mocks'

let nottree = false;

test('renders correctly', () => {
  const tree = plants1.length;
  expect(tree).toBe(3);
});

test('renders correctly', () => {
    const tree = plants2.length;
    expect(tree).toBe(5);
  });
