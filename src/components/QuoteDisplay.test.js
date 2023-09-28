import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import QuoteDisplay from './QuoteDisplay';

test('QuoteDisplay snapshot test', () => {
  const component = renderer.create(<QuoteDisplay />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
