/* === HEADER OF PAGE ================================*/
function openMenu() {
  document.body.classList.add('menu-expanded')
  document.getElementById("camada_bloq").style.display = "block"
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
  document.getElementById("camada_bloq").style.display = "none"
}

let isOpen = false;

function menu() {
  if (isOpen) {
    closeMenu()
    isOpen = false
  } else {
    openMenu()
    isOpen = true
  }
}

/* === PÁGINA HOME ================================*/
$('.carousel').carousel({
  interval: 5000
})