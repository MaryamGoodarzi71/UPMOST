const menuItems = document.querySelectorAll(".menu__item")
const mobileMenuItems = document.querySelectorAll(".mobile-menu__item")
const menuLinks = document.querySelectorAll(".menu__link")
const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")

let navOpen = false

function randomImage(){
   let imagesRandomHome = [
      "home-image1.jpg",
      "home-image2.jpg",
      "home-image3.jpeg",
      "home-image4.webp",
      "home-image5.jpg"
   ];
   let randomIndex = Math.floor(Math.random() * imagesRandomHome.length);
   let background = 'url(' + imagesRandomHome[randomIndex] + ')';

   document.querySelector('.home').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)),' + background
}

randomImage();
setInterval(randomImage, 4000);


menuItems.forEach(function(menuItem){
   menuItem.addEventListener("click", function(event){
      event.preventDefault()
      document.querySelector(".menu__item--active").classList.remove("menu__item--active")
      menuItem.classList.add("menu__item--active")
      let sectionClass = menuItem.getAttribute("data-section")
      let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop
      console.log(sectionOffsetTop);
      window.scrollTo({
         top: sectionOffsetTop,
      })
   })
})

mobileMenuItems.forEach(function(mobileMenuItem){
   mobileMenuItem.addEventListener("click", function(event){
      event.preventDefault()
      document.querySelector(".mobile-menu__item--active").classList.remove("mobile-menu__item--active")
      mobileMenuItem.classList.add("mobile-menu__item--active")
   })
})

navBtn.addEventListener("click", function(){
   if(navOpen){
      navBtn.classList.remove("nav__btn--open")
      navMenu.style.left = "-25rem"
      navOpen = false
   }else{
      navBtn.classList.add("nav__btn--open")
      navMenu.style.left = "0px"
      navOpen = true
   }
})






