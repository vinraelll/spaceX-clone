// DOM elements
const $hamburger  = document.getElementById('hamburger')
const $overlay    = document.getElementById('overlay')
const $mobileMenu = document.getElementById('mobile')

// Event listeners
$hamburger.addEventListener('click', toggleMobile) 
$overlay.addEventListener('click', toggleMobile)

// Event handlers 
function toggleMobile() {
  $hamburger.classList.toggle('open')
  $overlay.classList.toggle('overlay-show')
  $mobileMenu.classList.toggle('open')
  document.body.classList.toggle('scrollLock')
}
