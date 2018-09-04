const $navLinks = document.querySelectorAll('.navigation__link')

$navLinks.forEach(link => {
  link.addEventListener('click', unchecked)
})

function unchecked () {
  const $checkbox = document.querySelector('.navigation__input')
  $checkbox.checked = false
}
