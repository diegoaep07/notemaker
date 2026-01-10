import path from 'node:path'
import express from 'express'
import { env } from 'node:process'
import { createNewNote, deleteNote } from './src/handleNotes.js'

const app = express()

// Preparar el servidor para recibir peticiones JSON
app.use(express.json())

// Preparar el servidor para servir archivos estaticos de la carpeta public
app.use('/', express.static(path.join(env.HOME_DIRNAME , 'public/')))

// Peticion Post para crear una nota
app.post('/new', (req, res) => {
  createNewNote(req.body.title, req.body.noteBody)
  
  res.send('La nota ha sido creada con exito')
})

// Peticion Post para borrar una nota
app.post('/delete', (req, res) => {
  deleteNote(req.body.noteId)

  res.send('La Nota ha sido borrada')
})

// Lanzar el servidor
app.listen(env.SERVER_PORT, ()=>{
  console.log(`Server Running on port: ${env.SERVER_PORT}`)
})
