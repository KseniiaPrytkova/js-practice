/* 
  Client -> Server -> DataBase -> Server -> Client
*/

console.log('Client: I want to get a list of users')
console.log('...')

setTimeout(function() {
  console.log('Сервер: запрашиваю список пользователей в БД')
  console.log('...')

  setTimeout(function() {
    console.log('Server: requesting a list of users in the database')
    console.log('...')

    setTimeout(function() {
      console.log('Server: transforming data for the client')
      console.log('...')

      setTimeout(function() {
        console.log('Client: received data and display it')
      }, 1000)
    }, 500)
  }, 500)
}, 1000)