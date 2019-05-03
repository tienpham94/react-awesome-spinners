import React from 'react'
import renderer from 'react-test-renderer'
import { Ellipsis } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Ellipsis />).toJSON()
  expect(tree).toMatchSnapshot()
})
