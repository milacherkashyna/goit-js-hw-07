import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markUp = galleryItems
  .map(
    (item) => `
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
`
  )
  .join("");
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML(`beforeend`, markUp);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  scrollZoom: false,
});
