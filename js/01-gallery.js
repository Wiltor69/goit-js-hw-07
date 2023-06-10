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
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    }). join('');
};

galleryRef.addEventListener('click', onClick)

function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }
    
    const source = event.target.dataset.source
    const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`)

    
    instance.show();
    galleryRef.addEventListener('keydown', (event) => {

        if (event.code === 'Escape') {
        
        instance.close()
    }
})
}


    
  
//console.log(galleryItems);
