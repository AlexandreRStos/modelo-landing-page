document.querySelector('#sobre').scrollIntoView({ 
  block: 'end',
  behavior: 'smooth'
})

window.onscroll = () => animeColor()

const $navigation = document.querySelector('.navigation')
const sticky = '104'
const $links = $navigation.querySelectorAll('.navigation__link')
const $logo = $navigation.querySelector('.navigation__logo')

function animeColor () {
  if (window.pageYOffset >= sticky) {
    $navigation.classList.add('--color')
    $logo.setAttribute('src', 'img/svg/logotipo-exemplo-white.svg')
    $links.forEach(link => {
      link.classList.add('--color')
    })
  } else {
    $navigation.classList.remove('--color')
    $logo.setAttribute('src', 'img/svg/logotipo-exemplo-green.svg')
    $links.forEach(link => {
      link.classList.remove('--color')
    })
  }
}
