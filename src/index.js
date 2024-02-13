import axios from 'axios';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
    timeout: 3000, 
    resetOnHover: true,
    position: 'topRight',
});
const elements = {
    form: document.querySelector('.js-form'),
    gallery: document.querySelector('.gallery'),
    guard: document.querySelector('.js-guard')
}
const options = {
    rootMargin: '50px'
}
const observer = new IntersectionObserver(handlerNoadMore, options);
let page = 1;
let value = "";
function createMarkup(response) {
    const markupData = response.data.hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<div class="photo-card">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${likes}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${views}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${comments}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${downloads}</span>
                </p>
            </div>
         </div>`
    }).join('');
    elements.gallery.insertAdjacentHTML('beforeend', markupData);
}

elements.form.addEventListener('submit', handlerSearch);
function handlerSearch(evt) {
    evt.preventDefault();
    
    const { searchQuery } = evt.currentTarget.elements;
    elements.gallery.innerHTML = '';
    value = searchQuery.value;
    if (value !== "") {
          serviceItems(value, page);
        elements.form.reset();
    } else {
        iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again.`,
          });
     }
   
}
async function serviceItems(value, page) {
    try {
        const response = await axios.get(`https://pixabay.com/api/?key=42309515-7c9611a24bfcb09e365820ed6&q=${value}&image_type=photo&orientation=horizontal&=true&per_page=40&page=${page}`)
        if (response.data.hits.length === 0) {
            iziToast.error({
                message: `Sorry, there are no images matching your search query. Please try again.`,
              });
        } else {
            createMarkup(response);
            let photoCard = new SimpleLightbox('.photo-card a', {
                captionDelay :'250'
            });
        }
        if (page <= response.data.total / 40 && page < 500) {
            observer.observe(elements.guard)
        } else {
            observer.unobserve(elements.guard);
        }
    }
    catch(error) {
        iziToast.error({
            message: `Sorry, there are no images matching your search query. Please try again.`,
          });
    }
}
function handlerNoadMore(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            page += 1;
            serviceItems(value, page);
             const { height: cardHeight } = document
            .querySelector(".gallery")
            .firstElementChild.getBoundingClientRect();
            window.scrollBy({
                top: cardHeight * 2,
                behavior: "smooth",
            });
        }
    })
}