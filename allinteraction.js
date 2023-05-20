// button back to top


		let mybutton = document.getElementById("btn-back-to-top");
	
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () {
	scrollFunction();
	};
	
	function scrollFunction() {
	if (
	document.body.scrollTop > 30 ||
	document.documentElement.scrollTop > 30
	) {
	mybutton.style.display = "block";
	} else {
	mybutton.style.display = "none";
	}
	}

	// When the user clicks on the button, scroll to the top of the document
	mybutton.addEventListener("click", backToTop);
	
	function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	}
	 

    //===================================================== NAvigation for mobile
    function toggleMenu () {  
        const navbar = document.querySelector('.navbar');
        const burger = document.querySelector('.hamberger');

        burger.addEventListener('click', (e) => {    
          navbar.classList.toggle('show-nav');
        });    
      }
      toggleMenu();


// ================================================== acrodiong
    
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});





// Navigation mobile
$(document).ready


// animation Navigation when sroll down

window.addEventListener('scroll', function () {
  let bgnavi = document.getElementById('bgnavi');
  let windowPosition = window.scrollY > 50;
  bgnavi.classList.toggle('scrolling-active', windowPosition); })


// animation review obkject when sroll down
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);


// Scroll navbar with available background
var lastScrollTop; // This Varibale will store the top position

bgnavi = document.getElementById("bgnavi"); // Get The bgnavi

window.addEventListener("scroll", function () {
  //on every scroll this funtion will be called

  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll

  if (scrollTop > lastScrollTop) {
    //if it will be greater than the previous
    bgnavi.style.top = "-80px";
    
  
    //set the value to the negetive of height of bgnavi
  } else {
    bgnavi.style.top = "0";

    
  }

  lastScrollTop = scrollTop; //New Position Stored

  
});





// Carousel product

$(document).ready(function(){
  $("#newin_carousel-product").owlCarousel({
    margin:20,
    loop: true,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive: {

    0:{
      items:1,
      autoplay:false,
    },

    430:{
      items:2,
      autoplay:false,
    },

    576:{
      items:2,
      autoplay:false,
    },

    768:{
      items:3,
      
    },

    992:{
      items:4,
      
    },

    1200: {
      items: 4
    },

    }

  });
});


// Carousel product - branding - as seen in

$(document).ready(function(){
  $("#carousel_clients").owlCarousel({
    margin:15,
    loop: true,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive: {

    0:{
      items:3,
      autoplay:false,
    },

    576:{
      items:4,
      autoplay:false,
    },

    768:{
      items:6,
      
    },

    992:{
      items:6,
      
    },

    1200: {
      items: 7,
    },

    }

  });
});


// Carousel product  - service

$(document).ready(function(){
  $("#service_carousel").owlCarousel({
    margin:10,
    loop: true,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive: {

    0:{
      items:1,
      autoplay:false,
    },

    320:{
      items:1,
      autoplay:false,
    },


    576:{
      items:2,
      autoplay:false,
    },

    768:{
      items:2,
      
    },

    992:{
      items:4,
      
    },

    1200: {
      items: 4,
    },

    }

  });
});

// Carousel product - Read more

$(document).ready(function(){
  $("#readmore_carousel").owlCarousel({
    margin:15,
    loop: true,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive: {

    0:{
      items:1,
      autoplay:false,
    },

    576:{
      items:1,
      autoplay:false,
    },

    768:{
      items:2,
      
    },

    992:{
      items:3,
      
    },

    1200: {
      items: 3,
    },

    }

  });
});


// About Us - meet our team

$(document).ready(function(){
  $("#meetourteam").owlCarousel({
    margin:15,
    loop: true,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive: {

    0:{
      items:1,
      autoplay:false,
    },

    576:{
      items:1,
      autoplay:false,
    },

    768:{
      items:2,
      
    },

    992:{
      items:3,
      
    },

    1200: {
      items: 3,
    },

    }

  });
});


// About Us -sociaty

$(document).ready(function(){
  $("#society_aboutus").owlCarousel({
    margin:15,
    loop: true,
    autoplay:true,
    autoplayTimeout: 3000,
    responsive: {

    0:{
      items:1,
      autoplay:false,
    },

    576:{
      items:1,
      autoplay:false,
    },

    768:{
      items:2,
      
    },

    992:{
      items:3,
      
    },

    1200: {
      items: 3,
    },

    }

  });
});

// prductdetail_information tabs

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




//  productdatail_ rewiew + question tab

let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".content > div");
let divsArray = Array.from(divs);

// console.log(tabsArray);

tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(ele);
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    // console.log(e.currentTarget.dataset.cont);
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
  });
});


// number spiner
$(".plus").click(function(){
  var quantity = parseInt($(".qty").html()) +1;
  $(".qty").html(quantity);
  return false;
});

$(".minus").click(function(){
  var quantity = parseInt($(".qty").html()) -1;
  if(quantity < 0) quantity = 0;
  $(".qty").html(quantity);
  return false;
});


// sign in - sign up 
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));
