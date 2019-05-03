import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Ring,
  DualRing,
  Roller,
  Heart,
  Circle,
  Default,
  Ellipsis,
  Grid,
  HourGlass,
  Ripple,
  Spinner
} from '../src'

storiesOf('Spinners', module)
  .add('Ring', () => <Ring />)
  .add('Dual Ring', () => <DualRing />)
  .add('Circle', () => <Circle />)
  .add('Roller', () => <Roller />)
  .add('Default', () => <Default />)
  .add('Ellipsis', () => <Ellipsis />)
  .add('Grid', () => <Grid />)
  .add('HourGlass', () => <HourGlass />)
  .add('Ripple', () => <Ripple />)
  .add('Spinner', () => <Spinner />)
  .add('Heart', () => <Heart />)
