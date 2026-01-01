const express = require("express")
const app = express()

app.get('/', (req, res) => {
  res.send('hola mundo')
} )

const port = 8000
app.listen(port, ()=>{
  console.log(`Server Running on port ${port}`)
})
