import { writeFile } from 'node:fs'
import { env } from 'node:process'
import path from 'node:path'
import { DatabaseSync } from 'node:sqlite'

const db = new DatabaseSync(env.DB_DIRNAME)

export const createNewNote = ( title, body ) => {
  const insert = db.prepare(`INSERT INTO Notes (title, body) VALUES (?, ?)`)
  insert.run(title, body)
}

export const deleteNote = (noteId) => {
  const delete_note = db.prepare(`DELETE FROM Notes WHERE noteId=?`)
  delete_note.run(noteId)
}
