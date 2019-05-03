import React from 'react'
import renderer from 'react-test-renderer'
import { Default } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Default />).toJSON()
  expect(tree).toMatchSnapshot()
})
