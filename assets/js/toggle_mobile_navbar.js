const navbarMobile = document.querySelector('div.nav-mobile')
const items = document.querySelector('#nav-mobile-items')

function toggleNavbar() {
  if (items.classList.contains('deactive')) {
    showNavbar()
  } else {
    hideNavbar()
  }
}

function hideNavbar() {
  items.classList.remove('active')
  items.classList.add('deactive')
}

function showNavbar() {
  items.classList.add('active')
  items.classList.remove('deactive')
}

navbarMobile.addEventListener('click', toggleNavbar)
