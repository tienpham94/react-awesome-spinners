import React from 'react'
import renderer from 'react-test-renderer'
import { Roller } from '..'

it('renders correctly', () => {
  const tree = renderer.create(<Roller />).toJSON()
  expect(tree).toMatchSnapshot()
})
