const express = require('express')
const app = express()
const port = 3000 || process.env.PORT
const itemRouter = require('./routes/item')

app.get('/', (req, res) => {
  res.json({ message: 'alive' })
})

app.use('/item', itemRouter)

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
