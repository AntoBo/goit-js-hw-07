import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML('afterbegin', createGalleryMarkup(galleryItems));
galleryEl.addEventListener('click', onGalleryClick);
let basicLightboxinstance;

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

function onGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;

  basicLightboxinstance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);

  basicLightboxinstance.show();

  window.addEventListener('keydown', onEscPress);
}

function onEscPress(event) {
  if (event.code !== 'Escape') return;

  basicLightboxinstance.close();
  window.removeEventListener('keydown', onEscPress);
}
