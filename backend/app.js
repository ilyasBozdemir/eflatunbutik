const express = require('express')
const app = express()
const port = 4000




var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})