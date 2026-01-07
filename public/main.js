const reqBody = async (body_object) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body_object)
  }
}

let testing = {
  'noteId': 4
}

const newNote = async (noteObj) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(noteObj)
  }
  try {
    let serverReq = await fetch('/delete', options)
    if(serverReq.ok){
      const response = serverReq.text()
      console.log(response)
    }
  }
  catch(err){
    console.log(err)
  }
}

newNote(testing)
