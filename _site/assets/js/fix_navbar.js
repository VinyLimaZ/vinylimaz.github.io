const navbar = document.querySelector('nav')
const navTitle = document.querySelector('#nav-title')
let timeoutArray = []
let i = 0

function offset() {
  if (window.matchMedia('(max-width: 700px)')) {
    return 29
  } else {
    return 0
  }
}

function isHeaderOverflow() {
  const siteHeader = document.querySelector('h2.description')

  if (siteHeader.getBoundingClientRect().top <= offset()) {
    return true
  } else {
    return false
  }
}

function fixNavbar() {
  navbar.classList.add('fixed')
}

function unfixNavbar() {
  navbar.classList.remove('fixed')
}

function showNavbarTitle() {
  navTitle.classList.remove('hidden')
}

function hideNavbarTitle() {
  navTitle.classList.add('hidden')
}

function onLoad() {
  if (isHeaderOverflow()) {
    fixNavbar()
    showNavbarTitle()
  } else {
    unfixNavbar()
    hideNavbarTitle()
  }
}

function clearAllTimeouts(timeoutArray) {
  timeoutArray.forEach((to) => clearTimeout(to))
}

onLoad()
window.addEventListener('scroll', onLoad)
