const reqBody = async (body_object) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(body_object)
  }
}

let testing = {
  'title': 'Testing',
  'noteBody': 'Hola, esto es una nota de prueba'
}

const newNote = async (noteObj) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(noteObj)
  }
  try {
    let serverReq = await fetch('/new', options)
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
