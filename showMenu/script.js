const btnMenu = document.getElementById("btnMenu")
const btnFechar = document.getElementById("btnFechar")
const drawer = document.querySelector(".drawer")
const overlay = document.querySelector(".overlay")
const body = document.querySelector("body")

function showMenu() {
  console.log("Mostrar Menu")
  drawer.classList.add("show")
  overlay.classList.add("show")
  body.style.overflow = "hidden"
}

function hideMenu() {
  console.log("Esconder Menu")
  drawer.classList.remove("show")
  overlay.classList.remove("show")
  body.style.overflow = ""
}

// function hasClass(element, className) {
//   return element.classList.contains(className)
// }

// if (hasClass(drawer, "show")) {
//   overlay.classList.add("show")
// }
