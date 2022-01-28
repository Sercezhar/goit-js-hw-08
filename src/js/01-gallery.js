import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const images = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}">
          <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
      </a>`,
  )
  .join('');

galleryRef.innerHTML = images;

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
