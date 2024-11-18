const express = require('express')
const app = express()
const port = 3000
//app.get('/', (req, res) => {
 //   console.log(req.query)
   // console.log(res)
//}) console.log(res)

//console.log(express)
//console.log(app)




app.listen(port, () => {
  console.log(`Server on port ${port}`)
})

app.get('/', (req, res) => {
  console.log('prova')
  res.send ('Server del mio blog')
})


const array = require('image')

app.get('/bacheca', (req, send) => {
  res.send(`Questo è il mio server ${array}`)
})