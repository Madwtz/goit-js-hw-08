// Add imports above this line
import {galleryItems} from "./gallery-items";
// Descris în documentație
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('div.gallery');
const photosMarkup = createGalleryItems(galleryItems);

function createGalleryItems(element) {
    return element
    .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}" >
        <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>`;
    })
    .join("");
}
galleryContainer.insertAdjacentHTML('beforeend', photosMarkup);
const galleryHandler = new SimpleLightbox(".gallery a", {
    captionData:'alt',
    captionDelay: 250
});
galleryHandler.on('show.simplelightbox');
