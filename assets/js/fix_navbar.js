function fixNavbar() {
  const navbar = document.querySelector('nav')
  const siteHeader = document.querySelector('h2.description')

  if (siteHeader.getBoundingClientRect().top <= -45) {
    navbar.classList.add('fixed')
  } else {
    navbar.classList.remove('fixed')
  }
}
fixNavbar()

window.addEventListener('scroll', fixNavbar)
