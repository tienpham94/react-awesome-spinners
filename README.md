# react-awesome-spinners

[![NPM version](https://img.shields.io/npm/v/react-awesome-spinners.svg)](https://www.npmjs.com/package/react-awesome-spinners)
[![Build Status](https://travis-ci.org/tienpham94/react-awesome-spinners.svg?branch=master)](https://travis-ci.org/tienpham94/react-awesome-spinners)
[![Coverage Status](https://coveralls.io/repos/github/tienpham94/react-awesome-spinners/badge.svg?branch=master)](https://coveralls.io/github/tienpham94/react-awesome-spinners?branch=master)
[![minified-size](https://img.shields.io/bundlephobia/min/react-awesome-spinners@1.2.1.svg)](https://bundlephobia.com/result?p=react-awesome-spinners@1.2.1)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![MIT License](https://img.shields.io/npm/l/react-css-spinners.svg)](https://github.com/tienpham94/react-awesome-spinners/blob/master/LICENSE)

Loading spinners for React, built with styled-components. 

[Demo](https://tienpham94.github.io/react-awesome-spinners)

![react-awesome-spinners](https://user-images.githubusercontent.com/25751050/57149864-5f8c4280-6dd5-11e9-9347-a0b37dc50437.gif)


## Installation

### npm

```sh
npm i react-awesome-spinners
```

### yarn

```sh
yarn add react-awesome-spinners
```

## Usage

1. Import any spinner

```js
import { Ring } from 'react-awesome-spinners'
```

2. Use it as usual

```js
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Ring } from "react-awesome-spinners";

const App = () => {
  const [loading, setLoading] = useState(true)
    
  return (
      loading && <Ring />
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Default Props

Common default props for all loaders:

```js
size: 64,
color: '#00bfff',
sizeUnit: 'px'
```

## Peer dependencies
- React (of course ⛵️)
- styled-components

## Examples

- [Create-React-App](./examples/cra)
- [Server-Side Rendering](./examples/ssr)
