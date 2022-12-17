import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<li class="gallery__item">
        <a class="gallery__link" href="${image.original}">
          <img src="${image.preview}" alt="${image.description}" class="gallery__image"/>
        </a>
      </li>`
  );
});

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
