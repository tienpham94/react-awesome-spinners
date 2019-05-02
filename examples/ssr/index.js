const express = require('express')
const { createElement, Fragment } = require('react')
const { renderToString } = require('react-dom/server')
const { Ring } = require('react-awesome-spinners')

const port = 3000
const app = express()

const html = renderToString(createElement(Fragment, null, createElement(Ring)))

app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>CJS Example</title>
    </head>
    <body>
      ${html}
    </body>
    </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
