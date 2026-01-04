import path from 'node:path'
import express from 'express'
import { env } from 'node:process'

const app = express()

// Preparar el servidor para recibir peticiones JSON
app.use(express.json())

// Preparar el servidor para servir archivos estaticos de la carpeta public
app.use('/', express.static(path.join(env.HOME_DIRNAME , 'public/')))

// Lanzar el servidor
app.listen(env.SERVER_PORT, ()=>{
  console.log(`Server Running on port: ${env.SERVER_PORT}`)
})
