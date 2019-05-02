import React from 'react'
import renderer from 'react-test-renderer'
import { Ring } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Ring />).toJSON()
  expect(tree).toMatchSnapshot()
})
