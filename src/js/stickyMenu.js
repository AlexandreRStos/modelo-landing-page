window.onscroll = () => stickyMenu() // chamar função ao move o scroll

const sticky = '104'
const $navigation = document.querySelector('.navigation')
const $logo = $navigation.querySelector('.navigation__logo use')
const $links = $navigation.querySelectorAll('.navigation__link')

function stickyMenu () {
  if (window.pageYOffset >= sticky) { // => comparar se o scroll é maior que o topMenu
    $navigation.classList.add('--fixed') // => add class para fixar menu top
    $logo.setAttribute('xlink:href', 'img/symbol-defs.svg#icon-logotipo-exemplo-white')
    $links.forEach(link => {
      link.classList.add('--color')
    })
  } else {
    $navigation.classList.remove('--fixed')
    $logo.setAttribute('xlink:href', 'img/symbol-defs.svg#icon-logotipo-exemplo-green')
    $links.forEach(link => {
      link.classList.remove('--color')
    })
  }
}
