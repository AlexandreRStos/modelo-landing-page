/// Logica
// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo
/// ///////////////////////////////////////////////////////////////////

// Pegar a lista de links interno da pagina
const $menulinks = document.querySelectorAll('a[href^="#"]')

// Capturar o click em um link especifico
$menulinks.forEach(link => {
  link.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick (event) {
  // Prevenir efeito padrao do browser
  event.preventDefault()
  const to = getScrollTopByHref(event.currentTarget) - 90 // menos height menu
  scrollToPosition(to)
}

// Verificar a distância entre o alvo e o topo
function getScrollTopByHref (element) {
  const id = element.getAttribute('href')
  return document.querySelector(id).offsetTop
}

// Animação do scroll até o alvo
function scrollToPosition (to) {
  window.scroll({
    top: to,
    behavior: 'smooth'
  })
}
