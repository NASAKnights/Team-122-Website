/* hidden: uncomment this
function dropdown() {
    var x = document.getElementById("NavbarPages");
    if (x.className === "navbarPages") {
      x.className += " responsive";
    } else {
      x.className = "navbarPages";
    }

  }

*/

navbarShift = "-80px";

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset; //somehow this redundancy is necessary
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

function responsiveReveal() {
  var revealLeft = document.querySelectorAll(".fadeLeft");
    var windowWidth = window.innerWidth;
    if (windowWidth < 900) {
      revealLeft.classList.remove("fadeLeft");
      revealLeft.classList.add("fadeUp");
    }
}

window.addEventListener("scroll", reveal);

//Run these on page load
responsiveReveal();
reveal();