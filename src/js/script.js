// Navbar Ficed
window.onscroll = function(){
    const header = document.querySelector("header");
    const topNav = header.offsetTop;

    if(window.pageYOffset > topNav){
        header.classList.add("navbar-fixed");
    }else{
        header.classList.remove("navbar-fixed");
    }
}


// Hamburger
const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");


// var a = 0;
function navbarClick(){
  // if(a == 0 && data){
    hamburger.classList.toggle("hamburger-active");
    navbar.classList.toggle("hidden");
    // a = 1;
    // return
  // }
  // if(!data && a == 0){
      // hamburger.classList.remove("hamburger-active");
      // navbar.classList.add("hidden");
  // }

  // a = 0;
}
function coba(){
  alert(a)
}


// Copy Akun to Clipboard

function gmailCopy(){
  navigator.clipboard.writeText("muhammadyunus1072@gmail.com");
}
function githubCopy(){
  navigator.clipboard.writeText("https://github.com/muhammadyunus1072");
}
function facebookCopy(){
  navigator.clipboard.writeText("https://www.facebook.com/Arashiyunus");
}
function linkedinCopy(){
  navigator.clipboard.writeText("https://www.linkedin.com/in/muhammad-yunus-56688723a");
}

const projectContainer = document.querySelectorAll(".project-container");

projectContainer.forEach((project, i) => {
  project.dataset.aos = "fade-up";
  if(i % 2 == 1){

    project.dataset.aosDelay = '400';
  }
});

// Initialisasi AOS (animated on scroll)

AOS.init();

// GSAP Animation

gsap.from("#lefthome",{duration: 1.3, x:-200, ease:'back'});

gsap.to("#homename",{duration: 2.5, text:"Muhammad Yunus", delay:1.5});