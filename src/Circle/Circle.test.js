import React from 'react'
import renderer from 'react-test-renderer'
import { Circle } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Circle />).toJSON()
  expect(tree).toMatchSnapshot()
})
