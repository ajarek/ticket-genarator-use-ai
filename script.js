document
  .getElementById('registration-form')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    const foto = document.getElementById('avatar')
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const github = document.getElementById('github').value
    const file = foto.files[0]
    const reader = new FileReader()

    reader.onload = function () {
      const base64String = reader.result
      const data ={
        image:base64String,
        name:name,
        email:email,
        github:github
      }
      localStorage.setItem('userData', JSON.stringify(data))
     
    }
    reader.onerror = function () {
      alert('Failed to read the file.')
    }
    reader.readAsDataURL(file)

    resetForm()
    
    window.location.href = 'confirmation.html'
  })

  const resetForm = () => {
    document.getElementById('registration-form').reset()
  }