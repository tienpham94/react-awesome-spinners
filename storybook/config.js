import { configure, addParameters } from '@storybook/react'

import packageJson from '../package.json'

function loadStories () {
  require('../stories/index.js')
}

addParameters({
  options: {
    name: 'React Awesome Spinners',
    url: packageJson.repository.url,
    showAddonPanel: false
  }
})

configure(loadStories, module)
