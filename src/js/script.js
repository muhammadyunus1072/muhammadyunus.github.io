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

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("hamburger-active");
    navbar.classList.toggle("hidden");
})

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
