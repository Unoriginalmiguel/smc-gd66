let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrowLeft"),
  arrowRight = document.querySelector("#arrowRight"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

 

// $(document).ready(function () {

//     $("#show_hide").on('click', function () {
//         $("#toggle_tst").show()
//         $("#DonateForm").hide()
//     });


// });



// $(function () {
//   $('.about-slide').slick({
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 3
//   });
// });


// $(document).ready(function () {

// $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });


// });
