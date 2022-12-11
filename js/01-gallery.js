import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach(({ preview, original, description }) => {
  galleryEl.insertAdjacentHTML(
    'beforeend',
    `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  );
});

galleryEl.addEventListener('click', onImgClick);

const instance = basicLightbox.create(`<img src="" width="800" height="600"?>`, {
  onShow: () => {
    window.addEventListener('keydown', onEscDown);
  },
  onClose: () => {
    window.removeEventListener('keydown', onEscDown);
  },
});

function onImgClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  instance.element().querySelector('img').src = e.target.dataset.source;
  instance.show();
}

function onEscDown(e) {
  if (e.key === 'Escape') {
    instance.close();
  }
}
