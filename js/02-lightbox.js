import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));
let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'outside',
});

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ original, preview, description }) => {
      return `<li><a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a></li>`;
    })
    .join('');
}
