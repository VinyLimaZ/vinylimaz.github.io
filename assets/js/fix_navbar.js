function addTitleToNavbar() {
  const h1Title = document.createElement('h1')
  const navbar = document.querySelector('nav')

  h1Title.innerText = 'VinyLimaZ'

  if (navbar.lastElementChild.tagName === 'UL') {
    navbar.appendChild(h1Title)
  }
}

function removeTitleFromNavbar() {
  const navbar = document.querySelector('nav')

  if (navbar.lastElementChild.tagName === 'H1') {
    navbar.lastElementChild.remove()
  }
}

function fixNavbar() {
  const navbar = document.querySelector('nav')
  const siteHeader = document.querySelector('h2.description')

  if (siteHeader.getBoundingClientRect().top <= offset()) {
    navbar.classList.add('fixed')
    addTitleToNavbar()
  } else {
    navbar.classList.remove('fixed')
    removeTitleFromNavbar()
  }
}

function offset() {
  if (window.matchMedia('(max-width: 700px)')) {
    return 29
  } else {
    return -45
  }
}

fixNavbar()
window.addEventListener('scroll', fixNavbar)
