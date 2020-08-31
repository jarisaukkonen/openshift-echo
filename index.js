const express = require('express')
const app = express()
const port = process.env['PORT'] || 8080;

app.all('*', (req, res) => {
  data = {
    '@timestamp': new Date(),
    'level': 'INFO',
    'method': req.method,
    'path': req.path,
    'query': req.query,
    'headers':req.headers,
    'body': req.body
  }
  console.log(JSON.stringify(data))
  res.type('json').send(data)
})

app.listen(port, () => console.log(`echo listening on port ${port}`))
