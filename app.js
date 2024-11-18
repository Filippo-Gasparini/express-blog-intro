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

app.get('/', () => {
  console.log('prova')
})
