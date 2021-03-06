const debounce = function (func, wait, immediate) {
  let timeout
  return function (...args) {
    const context = this
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

const target = document.querySelectorAll('[data-anime]')

function animeScroll () {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.3)
  target.forEach(element => {
    if (windowTop > element.offsetTop) {
      element.classList.add('animate')
    } else {
      element.classList.remove('animate')
    }
  })
}

animeScroll()

if (target.length) {
  window.addEventListener('scroll', debounce(() => {
    animeScroll()
  }, 200))
}
