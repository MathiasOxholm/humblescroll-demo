const scroll = new HumbleScroll({
  enableCallback: true,
  repeat: true,
  threshold: 0.5,
  offset: {
    bottom: -80,
  },
})

scroll.on('hs:complete', () => {
  console.log('HumbleScroll is initialized')
})

function myFunction() {
  const card = document.querySelector('#callback-card-1')
  const cardHeading = document.querySelector('#callback-card-1 h3')
  card.style = 'background-color: purple; border-radius: 50px; transform: scale(0.85);'
  cardHeading.style = 'transition: all 4000ms ease-out 0s; transform: scale(1.5) translate(120px, 72px);'

  setTimeout(() => {
    cardHeading.innerHTML = 'Kinda cool right?'
  }, 4000)
}

/* window.addEventListener('scroll', throttle(parallax, 14))

function throttle(fn, wait) {
  var time = Date.now()
  return function () {
    if (time + wait - Date.now() < 0) {
      fn()
      time = Date.now()
    }
  }
}

function parallax() {
  let scrolled = window.scrollY
  let parallaxEl = document.querySelector('.parallax')
  const parallaxRect = parallaxEl.getBoundingClientRect()
  console.log(parallaxRect)
  var coords = scrolled * 0.3 + 'px'
  parallaxEl.style.transform = 'translateY(-' + coords + ')'
}

console.log(window) */
