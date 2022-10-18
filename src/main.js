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

// function myFunction() {
//   console.log('HumbleScroll')
//   const card = document.querySelector('#callback-card-1')
//   const cardHeading = document.querySelector('#callback-1-heading')
//   card.style = 'background-color: purple; border-radius: 100%; transform: scale(0.75);'
//   setTimeout(() => {
//     cardHeading.innerHTML = 'Kinda cool right?'
//   }, 4000)
// }