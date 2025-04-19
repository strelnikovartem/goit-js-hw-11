import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightBox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 350,
  captionPosition: 'outside',
});

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const marcup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
	<a class="gallery-link" href="${largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${webformatURL}" 
		  alt="${tags}" 
		/>
	</a>
    
      <ul class="baner">
          <li class="baner-li">
            <p class="baner-title">Likes</p>
            <p class="baner-text">${likes}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Views</p>
            <p class="baner-text">${views}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Comments</p>
            <p class="baner-text">${comments}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Downloads</p>
            <p class="baner-text">${downloads}</p>
          </li>
      </ul>
    
</li>
`
    )
    .join('');
  galleryList.insertAdjacentHTML('beforeend', marcup);
  lightBox.refresh();
}

export function clearGallery() {
  galleryList.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
