document.querySelector('#load').addEventListener('click', load)

// Promise approach

function load() {
  var url = 'https://jsonplaceholder.typicode.com/users'
  
  fetch(url)
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      var ul = document.querySelector('#list')

      var html = data.map(function(item) {
        return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
      })
      
      ul.insertAdjacentHTML('afterbegin', html.join(' '))
    })
}

// Async Await approach

// document.querySelector('#load').addEventListener('click', load)

// async function load() {
//   var url = 'https://jsonplaceholder.typicode.com/users'

//   var response = await fetch(url)
//   var data = await response.json()

//   var ul = document.querySelector('#list')

//   var html = data.map(function(item) {
//     return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
//   })
  
//   ul.insertAdjacentHTML('afterbegin', html.join(' '))
// }