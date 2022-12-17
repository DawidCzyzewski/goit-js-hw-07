import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((image) => {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
    <a href="${image.original}" class="gallery__link">
      <img
      src="${image.preview}"
        class="gallery__image",
        data-source=${image.original}
        alt="${image.description}"
      />
    </a>
  </div>`
  );
});

const modal = (event) => {
  event.preventDefault();
  //   console.log(event.target);
  //   console.log(event.target.nodeName);
  //   console.log(event.target.classList);
  if (
    event.target.nodeName !== "IMG" ||
    event.target.classList.contains(!"gallery__item")
  ) {
    return;
  }
  {
    const instance = basicLightbox.create(
      `<img class="gallery__image" src=${event.target.dataset.source} width="1280" height="720">`
    );
    instance.show();

    // if (instance.visable) {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        //   if (event.key === "Escape") {
        instance.close();
        console.log("ESCAPED");
      }
    });
    // }
  }
};

gallery.addEventListener("click", modal);
