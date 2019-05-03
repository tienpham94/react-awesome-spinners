import React from 'react'
import renderer from 'react-test-renderer'
import { Heart } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Heart />).toJSON()
  expect(tree).toMatchSnapshot()
})
