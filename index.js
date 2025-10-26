{
  // navigation code
  var sidemenu = document.getElementById('sidemenu')

  function openmenu () {
    sidemenu.style.right = '0'
  }

  function closemenu () {
    sidemenu.style.right = '-200px'
  }

  fetch('http://localhost:8080/api/users')
    .then(res => res.json())
    .then(data => {
      console.log('Users:', data)
    })
    .catch(err => {
      console.error(err)
    })
}
