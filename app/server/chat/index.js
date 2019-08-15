function init(io) {
const users=[]

  io.on('connection', function (socket) {
    socket.on('login', username => {
      const user = {
        username: username,
        id: socket.id
      }
    }) 
    users.push(user)
    console.log(users)
    io.emit('new user', socket )
  })
}

module.exports = init