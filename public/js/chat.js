const socket = io()

// Elements
const $messageForm = document.querySelector('#message-form')
const $locationButton = document.querySelector('#send-location')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $messages = document.querySelector('#messages')

//Template
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML
const { username,room } = Qs.parse(location.search,{ ignoreQueryPrefix: true})

const autoscroll = () => {
  const $newMessage = $messages.lastElementChild;
  //Height of the new message
  const newMessageStyles =  getComputedStyle($newMessage)
  const newMessageMargin = parseInt(newMessageStyles.marginBottom)
  const newMessageHeight =  $newMessage.offsetHeight + newMessageMargin

  // Visible Height
  const visibleHeight = $messages.offsetHeight;
  const containerHeight = $messages.scrollHeight
  const scrolledOffset = $messages.scrollTop + visibleHeight

  if(containerHeight - newMessageHeight <= scrolledOffset){
    $messages.scrollTop = $messages.scrollHeight


  }

}

socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(messageTemplate,{
      username: message.username,
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm a')
    })
    $messages.insertAdjacentHTML('beforeend',html)
    autoscroll()

})

    socket.on('locationMessage',(url) => {
        console.log(url.username)
        const html = Mustache.render(locationMessageTemplate,{
          username: url.username,
          url: url.url,
        createdAt: moment(url.createdAt).format('h:mm a')

        })
        $messages.insertAdjacentHTML('beforeend',html)
        autoscroll()
    })

    socket.on('roomData',({ room,users}) => {
      const html = Mustache.render(sidebarTemplate,{
        room,
        users
      })
      document.querySelector('#sidebar').innerHTML = html

    })

    $messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    $messageFormButton.setAttribute('disabled','disabled') // disable form once it is submitted
    const message = e.target.elements.messages.value
    socket.emit('sendMessage',message,(error) => {
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value=''
        $messageFormInput.focus()
        if(error){
            return console.log(error)
        }
        console.log("This message was delivered")
    })
})

    $locationButton.addEventListener('click',() => {
    if(!navigator.geolocation){
        return alert('Geolocation is not supported by your browser')
    }
    $locationButton.setAttribute('disabled','disabled')
    navigator.geolocation.getCurrentPosition((position) => {
      socket.emit(
        "sendLocation",
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
        () => {
        $locationButton.removeAttribute('disabled')

          console.log("Location Sent");
        }
      );
    });
})

socket.emit('join',{username,room} ,(error) => {
  if(error){
    alert(error)
    location.href= '/'
  }

})