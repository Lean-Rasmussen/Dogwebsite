var slideIndex = 0;
var dots = $(".main__slideshow__dot");

function removeBackground (n){
  var currentSlide = "main__slideshow__slide"+n;
  $(".main__slideshow-container").removeClass(currentSlide);
  $('.active-dot').removeClass('active-dot');
}
function addBackground (n){
  $(".main__slideshow-container").addClass("main__slideshow__slide"+n);
}

function slideshowCarousel(){
  var dots = $(".main__slideshow__dot");
  removeBackground(slideIndex);
  slideIndex <=2 ? (slideIndex+=1) : slideIndex =1;
  addBackground(slideIndex);
  $(dots[slideIndex-1]).addClass("active-dot");
  setTimeout(slideshowCarousel, 3000);  
}

window.onload =function(){
  slideshowCarousel();
}; 
