const shareButton = document.querySelector('footer button')
const shareLinksButton = document.querySelector('.share-links-wrapper button')
const shareLinks = document.querySelector('.share-links-wrapper')

shareButton.addEventListener('click', () => {
  shareLinks.classList.remove('sr-only')
})

shareLinksButton.addEventListener('click', () => {
  shareLinks.classList.add('sr-only')
})
