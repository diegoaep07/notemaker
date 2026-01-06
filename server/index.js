import path from 'node:path'
import express from 'express'
import { env } from 'node:process'
import { createNewNote } from './src/handleNotes.js'

const app = express()

// Preparar el servidor para recibir peticiones JSON
app.use(express.json())

// Preparar el servidor para servir archivos estaticos de la carpeta public
app.use('/', express.static(path.join(env.HOME_DIRNAME , 'public/')))

// Peticion Post para crear una nota
app.post('/new', (req, res) => {
  console.log("Nueva Peticion para crear una nota")
  console.log(req.body)

  createNewNote(req.body.title, req.body.noteBody)
  
  res.send('La nota ha sido creada con exito')
})

// Lanzar el servidor
app.listen(env.SERVER_PORT, ()=>{
  console.log(`Server Running on port: ${env.SERVER_PORT}`)
})
