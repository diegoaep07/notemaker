// Limpiar toda la pantalla, antes de iniciar todo el servidor
console.clear()

const express = require("express")
const app = express()

// Preparar el servidor para recibir peticiones JSON
app.use(express.json())

// Preparar el servidor para servir archivos estaticos de la carpeta public
const path = require('path')
app.use('/', express.static(path.join(__dirname , '../public/')))

// Peticion Get de prueba
app.post('/test', (req, res) => {
  console.log('TEST RECIBIDO')
  console.log(req.body.msg)
})

const port = 8000
app.listen(port, ()=>{
  console.log(`Server Running on port ${port}`)
})
