import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const makup = creatImgMakup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', makup);

function creatImgMakup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>`
    }). join('');
};

galleryRef.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault();

    if (event.target.tagName !== "IMG") {
        return;
    }

     new SimpleLightbox('.gallery a',{
        
        captionPosition: 'bottom',
        captionDelay: 250,
        captionsData: 'alt',
        
    });
    
    }


//console.log(galleryItems);
