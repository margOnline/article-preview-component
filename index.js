const shareButton = document.querySelector('.show-links')
const shareLinks = document.querySelector('.share-links-wrapper')
const buttonImg = document.querySelector('.show-links img')

shareButton.addEventListener('click', () => {
  shareLinks.classList.toggle('sr-only')
  shareButton.classList.toggle('show-links-button-active')
})
