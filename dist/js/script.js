// Navbar FIxed
const header = document.querySelector('header')
const fixedNav = header.offsetTop
const backToTop = document.querySelector('#back-to-top')

if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed')
    backToTop.classList.remove('hidden')
    backToTop.classList.add('flex')
} else {
    header.classList.remove('navbar-fixed')
    backToTop.classList.remove('flex')
    backToTop.classList.add('hidden')
}

// Hamburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// Klik diluar hamburger
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// Darkmode
const darkmode = document.querySelector('#darkmode')
const html = document.querySelector('html')

darkmode.addEventListener('click', function(){
  // darkmode.checked ? html.classList.add('dark') : html.classList.remove('dark')
  if(darkmode.checked){
    html.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkmode.checked = true
} else {
  darkmode.checked = false
}