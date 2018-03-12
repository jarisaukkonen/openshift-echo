const express = require('express')
const app = express()

app.get('*', (req, res) => {
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

app.listen(8080, () => console.log('echo listening on port 8080'))
