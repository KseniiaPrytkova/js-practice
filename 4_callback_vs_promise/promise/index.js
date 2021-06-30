/* 
  Client -> Server -> DataBase -> Server -> Client
*/

console.log('Client: I want to get a list of users')
console.log('...')

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log('Server: requesting a list of users in the database')
    console.log('...')
    resolve()
  }, 1000)
})

promise.then(function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var users = [
        {uid: 'id1', name: 'Peter'},
        {uid: 'id2', name: 'Simon'}
      ]
      // reject('DB could not get the list of users')
      console.log('DB: form a list of users', users)
      console.log('...')
      resolve(users)
    }, 500)
  })
})
.then(function(dbUsers) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Server: transforming data for the client')
      console.log('...')
      var users = dbUsers.map(function(user) {
        return {
          id: user.uid,
          firstName: user.name,
          timestamp: Date.now()
        }
      })
      resolve(users)
    }, 500)
  })
})
.then(function(users) {
  setTimeout(function() {
    console.log('Client: received data and display it', users)
  }, 1000)
})
.catch(function(error) {
  console.error(error)
})
// .finally(function() {
//   console.log('Finally')
// })