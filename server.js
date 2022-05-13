const express = require('express')
const app = express()
const port = 3080

app.get('/', (req, res) => {
  res.json({ info: "Node js server running"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
