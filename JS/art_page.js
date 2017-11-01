//Opens the modal
function openModal() {
    document.getElementById('myModal').style.display = "block";
         }
//Closes the modal           
function closeModal() {
    document.getElementById('myModal').style.display = "none";
         }
//When you click a particular thumbnail that particular slide it represents will open
var slideIndex = 1;
         showsSlides(slideIndex);
function plusSlides(n) {
             showSlides(slideIndex += n);
         }
//So you know what slide you are on        
function currentSlide(n) {
             showSlides(slideIndex = n);
         }
//How the whole lightbox gallery works. Kind of like a slideshow in a sense
function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
            }
            