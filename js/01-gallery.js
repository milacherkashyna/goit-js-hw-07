import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markUp = galleryItems
  .map(
    (item) => `
<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>
`
  )
  .join("");
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML(`beforeend`, markUp);
const onImageClick = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const closeModal = (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => window.removeEventListener("keydown", closeModal),
    }
  );
  instance.show();
};

gallery.addEventListener("click", onImageClick);
