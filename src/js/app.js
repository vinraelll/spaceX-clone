// DOM elements
const $hamburger    = document.getElementById('hamburger')
const $overlay      = document.getElementById('overlay')
const $mobileMenu   = document.getElementById('mobile')
const $statCounters = document.querySelectorAll('.stats__item-count')

let scrollFlag      = false

// Event listeners
$hamburger.addEventListener('click', toggleMobile) 
$overlay.addEventListener('click', toggleMobile)
document.addEventListener('scroll', scrollPage)

// Event handlers 
function toggleMobile() {
  $hamburger.classList.toggle('open')
  $overlay.classList.toggle('overlay-show')
  $mobileMenu.classList.toggle('open')
  document.body.classList.toggle('scrollLock')
}

function scrollPage() {
  const scrollPos = window.scrollY

  if (scrollPos > 60 && !scrollFlag) {
    updateFalconStats()
    scrollFlag = true
  } else if (scrollPos < 60 && scrollFlag) {
    resetFalcoStats()
    scrollFlag = false
  }
}

function resetFalcoStats() {
  $statCounters.forEach(counter => counter.innerText = '0')
}

function updateFalconStats() {
  $statCounters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
      // get count target
      const target = +counter.getAttribute('data-target')

      // get current target value
      const c = +counter.innerText

      // create an increment
      const increment = target / 100

      // if counter is < target, add increment
      if (c < target) {
        // round up and set the counter value 
        counter.innerText = `${Math.ceil(c + increment)}`

        setTimeout(updateCounter, 55)
      } else {
        counter.innerText = target
      }
    }

    updateCounter() 
  })
}

updateFalconStats()