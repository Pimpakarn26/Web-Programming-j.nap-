let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");

menu.onclick = () =>{
    console.log("clicked");
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Show search form
let search = document.querySelector("#search-icon");
search.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle('active')
}
// Hide search form
let close_icon = document.querySelector("#close");
close_icon.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle('active')
}
//Swiper funtion
var swiper = new Swiper(".home-slider" , {
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:3000, //เวลาในการเคลื่นสไลด์ (millisecond)
        disableOnInteraction:false,
    },
    pagination :{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true
});

var swiper = new Swiper(".review-slider" ,{
    spaceBetween:30,
    centeredSlides:true,
    autoplay:{
        delay:3000, //เวลาในการเลื่อนสไลด์
        disableOnInteraction:false,
    },
    pagination :{
        el:".swiper-pagination",
        clickable:true,
    },
    loop:true,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        640:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    }
});
/*Loader section*/

function loader(){
    document.querySelector(".loader-container").classList.add("fade-out")
  }
  
  function fadeOut(){
    setInterval(loader, 3000)
  }
  window.onload = fadeOut;