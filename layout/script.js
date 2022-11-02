/* === HEADER OF PAGE ================================*/
const drawer = document.querySelector("header .drawer")
const openMenuButton = document.querySelector(".openMenu")
const closeMenuButton = document.querySelector(".closeMenu")
const body = document.body
let isOpen = false

function openMenu() {
  drawer.classList.add("show")
  closeMenuButton.style.display = "inherit"
  openMenuButton.style.display = "none"
  body.style.overflow = "hidden"
}

function closeMenu() {
  drawer.classList.remove("show")
  openMenuButton.style.display = "inherit"
  closeMenuButton.style.display = "none"
  body.style.overflow = ""
}

function menu() {
  if (isOpen) {
    closeMenu()
    isOpen = false
  } else {
    openMenu()
    isOpen = true
  }
}
