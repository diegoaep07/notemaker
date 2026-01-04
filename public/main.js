const sendMsg = async (msg) => {
  const options = {
    method: 'post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      message: msg
    })
  }

  try{
    let res = await fetch('/message', options)

    if(res.ok){
      let response = await res.text()
      console.log("Servidor: ", response)
    }
  }
  catch(err){
    console.log(err)
  }
}

const send_btn = document.getElementById('send_btn')
send_btn.addEventListener('click', () => {
  const message = document.getElementById('message').value
  sendMsg(message)
} )
