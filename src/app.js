const sidebar =  document.querySelector('.sidebar')
const sidebarClose = document.querySelector('.sidebar-close')
const hamburger = document.querySelector('.burger-menu')
const searchField = document.querySelector('#search-box')
const searchCon = document.querySelector('.search-box')
const autoComplete = document.querySelector('.auto-complete')
const mobileToggles = document.querySelectorAll('.mobile-overlay')
const imageOverlay = document.querySelector('.image-overlay')
const navIcons = document.querySelector('.nav-icons')
const brandLogo = document.querySelector('.brand-logo')
const searchButton = document.querySelector('.search')
const backBtn = document.querySelector('.back')
const cancel = document.querySelectorAll('.cancel')
const mainContent = document.querySelector('.content-area')


console.log(mainContent)
// open search icon on mobile screen
searchButton.addEventListener('click', () => {
  hamburger.style.display = "none";
  navIcons.style.display = "none";
  brandLogo.style.display = "none"
  backBtn.style.display = "block"
  searchCon.style.display = "flex"
  searchCon.style.width = "90%"

})

// close search icon on mobile screen
backBtn.addEventListener('click', () => {
  hamburger.style.display = "block";
  navIcons.style.display = "flex";
  brandLogo.style.display = "flex"
  backBtn.style.display = "none"
  searchCon.style.display = "none"
})

// open image overlay on mobile
mobileToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    console.log(e)
    imageOverlay.style.opacity = 1
    toggle.style.display = "none"
    cancel.forEach(btn => {
      btn.style.display = "block"
    })
    
  })
})
// close image overlay on mobile
cancel.forEach(cancelBtn => {
  cancelBtn.addEventListener('click', () => {
    imageOverlay.style.opacity = 0
    cancelBtn.style.display = "none"
    mobileToggles.forEach(btn => {
      btn.style.display = "block"
    })
    
  })
})

// open hamburger menu 
hamburger.addEventListener('click', () => {
  sidebar.style.left = 0
  mainContent.style.opacity = 0.2
})

// close hamburger menu
sidebarClose.addEventListener('click', () => {
  sidebar.style.left = '-80%'
  mainContent.style.opacity = 1;

})

// open autocomplete dropdown
searchField.addEventListener('click', () => {
  autoComplete.style.display = "block"
  searchField.placeholder = "four step to the epiph"
  
})

// remove autocomplete 
searchField.addEventListener('blur', () => {
  autoComplete.style.display = "none"
  searchField.placeholder = "Search books,genres,authors,etc."
})


