// hamburger--------------------------------------------------

const  hamburger = document.querySelector('.hamburger');
const  navMenu = document.querySelector('.nav-menu');

const hamburgerMenuBtnContainer = document.querySelector('.hamburger-menu');
const hamburgerMenuBtn = document.querySelector('.hamburger-menu i');

const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.openlink');


hamburgerMenuBtnContainer.addEventListener('click', function() {
  hamburgerMenuBtn.classList.toggle('fa-xmark');
  console.log("working")
  hamburgerMenuBtn.classList.toggle('fa-bars');
  navMenu.classList.toggle("active");
});

// close navbar when click on link

// Loop through each link and add a click event listener
links.forEach(link => {
	link.addEventListener('click', () => {
	  // Close the navbar when a link is clicked
	  navMenu.classList.remove('active');
	  hamburgerMenuBtn.classList.toggle('fa-xmark');
		hamburgerMenuBtn.classList.toggle('fa-bars');
	});
  });


// end hamburger--------------------------------------------------





// change the background color of header on scroll dawn-----------------------

$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $("header").addClass("header-active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("header").removeClass("header-active");
      }
  });
});

// end-------------------------------------------



// JS code for carousal in hero section
$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: false,
    prevArrow: false,
    infinite: true,
  });


  $('.responsive').slick({
    
    nextArrow: false,
    prevArrow: false,
    dots: false,
    infinite: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
       
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 5000,
        settings: "unslick"
      }
     
    ]
  });


  $('.deliverableInSP').slick({
    
    nextArrow: false,
    prevArrow: false,
    dots: false,
    infinite: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    responsive: [
      {
       
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 5000,
        settings: "unslick"
      }
     
    ]
  });
  
//  showMore content[Key features] ------------------------------------------

showButton = document.querySelector('.hideshowMore')

function testshowMore()
{
  if(showButton.innerText === 'SHOW MORE'){
    console.log('inside showmore')
    let x, i;
    x = document.getElementsByClassName("showMore");
    for (i = 0; i < x.length; i++) {
      addClass(x[i], "show");
    }
    showButton.innerText = 'SHOW LESS'

  }
  else if(showButton.innerText === 'SHOW LESS'){
    console.log('inside showless')
    let x, i;
    x = document.getElementsByClassName("showMore");
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], "show");
    }
    showButton.innerText = 'SHOW MORE'
  }

  
    
   
  }

  



function toggleshowMoreBtn(){
  console.log('working displayshowMore')
  var showmoreButton = document.querySelector('.show-more')
  showmoreButton.classList.toggle('hideshowMore')
  
}
function innerTextshowMore(){
 showButton.innerText = 'SHOW MORE'
  
}



  var isOther = false;

filterSelection("monitoring")
function filterSelection(c) {
  console.log('line number 147')
  console.log(c)
  var x, i;
  x = document.getElementsByClassName("filterFeature");
  if (c == "OTHER"){
    c = "";
    isOther = true;
  } 

  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    console.log("<---- ", x[i].className.indexOf(c) > -1)
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    if (x[i].className.indexOf('showMore') > -1) removeClass(x[i], "show");

  }
}

// end showMore-------------------------------------------------

// showMore content[Key deliverables] ------------------------------------------

const toggleShowMore = document.querySelector('.keydeliverableShowMore')

function showMoreToless(){

  if(toggleShowMore.innerText === 'SHOW MORE'){
    console.log('inside showmore')
    let x, i;
    x = document.getElementsByClassName("showMoreOnclick");
    for (i = 0; i < x.length; i++) {
      removeClass(x[i], "hidekeydelContent");
    }
    toggleShowMore.innerText = 'SHOW LESS'

  }
  else if(toggleShowMore.innerText === 'SHOW LESS'){
    console.log('inside showless')
    let x, i;
    x = document.getElementsByClassName("showMoreOnclick");
    for (i = 0; i < x.length; i++) {
      addClass(x[i], "hidekeydelContent");
    }
    toggleShowMore.innerText = 'SHOW MORE'
  }

  }
// end key deliverable showMore

// Adding class to cards
function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

// Removing Class from cards
function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}




// Changing active tab on click
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("tablinks");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[1].className = current[1].className.replace("active", "");
    this.className += "active";

  });
}
// <--------- Key-features functions ends here


// back to top----------------------------------

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  mybutton.style.display = "block";
	} else {
	  mybutton.style.display = "none";
	}
  }

  function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
  }


// 


/**
   * Sending select box data in php mailer
   */
const query_type = document.querySelector("#query_type");
const query_type_select = document.querySelector("#query_type_select");

query_type_select.addEventListener("change", function(){
  query_type.value = query_type_select.value;
})

window.addEventListener("load",function(){
 if(window.location.hash.includes('status=true')){
   document.querySelector('.sent-message').style.display="block";
   window.location.href = "#contact"
 } else if(window.location.hash.includes('status=false')) {
   document.querySelector('.error-message').style.display="block";
   window.location.href = "#contact"
 }
});





