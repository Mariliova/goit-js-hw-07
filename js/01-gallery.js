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

function onImgClick(e) {
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  e.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryEl.addEventListener(
    'keydown',
    e => {
      if (e.code === 'Escape') {
        instance.close();
      }
    },
    { once: true }
  );
}
