
// --------------- VARIABLES ------------------

navbarShift = "-80px";
let slideIndex = 0;

// --------------- FUNCTIONS ------------------
function dropdown() {
    var x = document.getElementById("NavbarPages");
    if (x.className === "navbarPages") {
      x.className += " responsive";
    } else {
      x.className = "navbarPages";
    }

  }

var prevScrollpos = window.scrollY;
window.onscroll = function() {
  var currentScrollPos = window.scrollY; //somehow this redundancy is necessary
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("NavContainer").style.top = "0";
  } else {
    document.getElementById("NavContainer").style.top = navbarShift;
  }
  prevScrollpos = currentScrollPos;
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

function scroll2Id(number){
  console.log(number);
  switch(number){
    case 0: // section 1 homepage
      document.getElementById("section1").scrollIntoView();
      break;

    default:
      document.scrollIntoView(false);
  }
}

function scrollSect1() {
  document.getElementById("section1").scrollIntoView();
}
function scrollSect2() {
  document.getElementById("section2").scrollIntoView();
}
function scrollCalendar(){
  document.getElementById("calendar").scrollIntoView();
}
function scrollSect3() {
  document.getElementById("contact").scrollIntoView();
}

window.addEventListener("scroll", reveal);

//----Carousel------------------


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//---------------------------


//Run these on page load
reveal();
showSlides();