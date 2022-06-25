







// click to change carousel


var slidePosition = 1;
SlideShow(slidePosition);

// // forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

// //  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
}





// automatic scrolling carousel

// var slidePosition = 0;
// SlideShow();

// function SlideShow() {
//   var i;
//   var slides = document.getElementsByClassName("containers");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slidePosition++;
//   if (slidePosition > slides.length) {slidePosition = 1}
//   slides[slidePosition-1].style.display = "block";
//   setTimeout(SlideShow, 8000); // Change image every 8 seconds
// } 



function toggle(a, b) {
  // get the text
  var myChange = document.getElementById(a);

  // get the current value of the text's display property
  var displaySetting = myChange.style.display;

  // also get the button, so we can change what it says
  var showHide = document.getElementById(b);

  // now toggle the text and the button text, depending on current state
  if (displaySetting == 'block') {
    // text is visible. hide it
    myChange.style.display = 'none';
    // change button text
    showHide.innerHTML = 'Show';
  }
  else {
    // text is hidden. show it
    myChange.style.display = 'block';
    // change button text
    showHide.innerHTML = 'Hide';
  }
}



