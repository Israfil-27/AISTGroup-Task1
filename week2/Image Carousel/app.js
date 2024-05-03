const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselImage = document.querySelector('.carousel-image img');

let imagesArray = [];
let currentIndex = 0;
const key = "Eh2sbcsAXVJFecm2wgmwDN0BazvxVgkBGanCvGCtxtA"
async function fetchImages() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?count=5&client_id=${key}`);
        const imageData = await response.json();
        console.log(imageData);
        imagesArray = imageData.map(item => item.urls.small);
        console.log(imagesArray);
        showImage(currentIndex);
    } catch (error) {
        console.error('image fetch error:', error);
    }
}
function showImage(index) {
    carouselImage.src = imagesArray[index];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imagesArray.length) % imagesArray.length;
    showImage(currentIndex);
});
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagesArray.length;
    showImage(currentIndex);
});
fetchImages();
