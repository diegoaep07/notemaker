import { writeFile } from 'node:fs'
import { env } from 'node:process'
import path from 'node:path'
import { DatabaseSync } from 'node:sqlite'

const db = new DatabaseSync(env.DB_DIRNAME)

export const createNewNote = ( title, body ) => {
  const INSERT_NOTE = db.prepare(`INSERT INTO Notes (title, body) VALUES (?, ?)`)
  INSERT_NOTE.run(title, body)
}

export const deleteNote = (noteId) => {
  const DELETE_NOTE = db.prepare(`DELETE FROM Notes WHERE noteId=?`)
  DELETE_NOTE.run(noteId)
}

export const getNoteContent = (noteId) => {
  const GET_NOTE_CONTENT = db.prepare('SELECT title, body FROM Notes WHERE noteId=?')
  const QUERY_RESULT = GET_NOTE_CONTENT.all(noteId)

  return QUERY_RESULT
}


