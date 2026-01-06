import { writeFile } from 'node:fs'
import { env } from 'node:process'
import path from 'node:path'

export const createNewNote = ( title, body ) => {
  writeFile(path.join(env.SERVER_DIRNAME, `root/files/${title}.txt`), body, (err) => {
    if(err) return 1
  })
}
