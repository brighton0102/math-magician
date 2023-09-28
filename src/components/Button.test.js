import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Button from './Button';

test('Button snapshot test', () => {
  const component = renderer.create(
    <Button label="Test Button" type="custom" onClick={() => {}} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
