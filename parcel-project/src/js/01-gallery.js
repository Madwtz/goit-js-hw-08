// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Import suplimentar de stil
import "simplelightbox/dist/simple-lightbox.min.css";
document.addEventListener('DOMContentLoaded', function () {
   
     const galleryContainer = document.querySelector('.gallery');
     console.log(galleryItems);
     function renderGallery() {
     galleryItems.forEach(item => {
     const listItem = document.createElement('li');
     listItem.classList.add('gallery__item');

     const link = document.createElement('a');
     link.classList.add('gallery__link');
     link.href = item.preview;

     const img = document.createElement('img');
     img.classList.add('gallery__image');
     img.src = item.original;
     img.alt = 'Image description';
     img.setAttribute('data-source', item.preview);

     link.appendChild(img);
     listItem.appendChild(link);
     gallery.appendChild(listItem);
    });
  }

  renderGallery();
    
  
      const lightbox = new SimpleLightbox('.gallery a');

     gallery.addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.nodeName === 'IMG') {
           
        }
    });
});