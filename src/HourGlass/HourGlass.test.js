import React from 'react'
import renderer from 'react-test-renderer'
import { HourGlass } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<HourGlass />).toJSON()
  expect(tree).toMatchSnapshot()
})
