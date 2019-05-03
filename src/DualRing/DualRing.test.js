import React from 'react'
import renderer from 'react-test-renderer'
import { DualRing } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<DualRing />).toJSON()
  expect(tree).toMatchSnapshot()
})
