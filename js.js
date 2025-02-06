/** 
Autor: Ana Camila Nambo Delhumeau
Fecha: 05/02/2024
Lenguaje: JavaScript
 Diseño web II
**/

let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
const imageNumber = document.getElementById('image-number');
document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPrevImage);
document.addEventListener('keydown', function(event) {

    if (event.key === 'ArrowRight') {
        showNextImage();
    } else if (event.key === 'ArrowLeft') {
                showPrevImage();
            }
        });
        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % totalImages;
            images[currentIndex].classList.add('active');
            updateImageNumber();
        }
        function showPrevImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            images[currentIndex].classList.add('active');
            updateImageNumber();
        }
        function updateImageNumber() {
            imageNumber.textContent = `Imagen ${currentIndex + 1}`;
        }
        function autoSlide() {
            showNextImage();
            setTimeout(autoSlide, 30000);
        }

        autoSlide();