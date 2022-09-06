function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
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