import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach(({ preview, original, description }) => {
  galleryEl.insertAdjacentHTML(
    'beforeend',
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  );
});

galleryEl.addEventListener('click', onImgClick);

function onImgClick(e) {
  if (!e.target.classList.contains('gallery__image')) {
    return;
  }
  e.preventDefault();
}

// var lightbox = new SimpleLightbox('.gallery a', {
//   /* options */
// });

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
  // to do: show title
});

gallery.on('error.simplelightbox', function (e) {
  console.log(e);
});
