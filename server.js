const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => res.send('api-data-fake'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
