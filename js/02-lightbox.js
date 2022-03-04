import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));
// galleryEl.addEventListener('click', onGalleryClick);
// let basicLightboxinstance;

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="l${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join('');
}
