var slideIndex = 0;
var dots = $(".main__slideshow__dot");

function removeBackground (n){
  var currentSlide = "main__slideshow__slide"+n;
  $(".main__slideshow-container").removeClass(currentSlide);
  $('.active').removeClass('active');
}
function addBackground (n){
  $(".main__slideshow-container").addClass("main__slideshow__slide"+n);
}

function slideshowCarousel(){
  var dots = $(".main__slideshow__dot");
  if(slideIndex<=2){
    removeBackground(slideIndex);
    slideIndex+=1;
    addBackground(slideIndex);
    $(dots[slideIndex-1]).addClass("active");
    setTimeout(slideshowCarousel, 3000);  
  }
  else{
    removeBackground(slideIndex);
    slideIndex=1;
    addBackground(slideIndex);
    $(dots[slideIndex-1]).addClass("active");
    setTimeout(slideshowCarousel, 3000);  
  }
}

window.onload =function(){
  slideshowCarousel();
}; 
