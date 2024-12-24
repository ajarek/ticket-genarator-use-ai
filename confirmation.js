const userData = JSON.parse(localStorage.getItem('userData'))

document.getElementById('user-name').textContent = userData.name
document.getElementById('user-email').textContent = userData.email
document.getElementById('user-github').textContent = userData.github
document.getElementById('user-image').src = userData.image
document.getElementById('name').textContent = userData.name + '!'
document.getElementById('email').textContent = userData.email
document.getElementById('date').textContent = newDate() + ' /'
document.getElementById('location').textContent = newLocation()

function newDate() {
  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}
function newLocation() {
  const options = { timeZoneName: 'long' }
  const formatter = new Intl.DateTimeFormat('pl-PL', options)
  const resolvedOptions = formatter.resolvedOptions()
  return resolvedOptions.timeZone
}
