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

function copy(data, e){
  $(e.target).prev().removeClass('scale-0')
  $(e.target).prev().addClass('scale-100')
  setTimeout(()=>{
    $(e.target).prev().addClass('scale-0')
    $(e.target).prev().removeClass('scale-100')
  },5000)
  navigator.clipboard.writeText(data);
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

// Kirim Pesan
$("#formKontak").on("submit",(e)=>{
  e.preventDefault();
  axios({
    method : "POST",
    url : "https://apilaundry.arashiyunus.com/api/auth/kirimEmail",
    data : {
      subject : "Email Dari kontak nama : "+$("#nama").val()+", no telp : "+$("#noTelp").val()+", email : "+$("#email").val()+".",
      body : $("#pesan").val()
    }
  }).then((res)=>{
    if(res.status == 200){
      swal("Berhasil !", "Pesan telah dikirim", "success");
    }else{
      swal("Gagal !", "Pesan tidak terkirim", "error");
    }
    $("#nama").val("");
    $("#noTelp").val("");
    $("#email").val("");
    $("#pesan").val("");
  })
})