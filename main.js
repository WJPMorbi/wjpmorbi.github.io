

// <!-- HTML: Make sure the necessary HTML structure and classes are present. -->
const navbar = document.querySelector(".navlink");



function openMenu() {
  navbar.style.left = "0";
  navbar.style.top = "0";
}

function clsMenu() {
    navbar.style.left = "-100%";
}


// <!-- JS: Updated and fixed version -->

  let cont = document.querySelectorAll(".cont");
  let currentContent = 0;

  function hideAllContent() {
    for (let i = 0; i < cont.length; i++) {
      cont[i].style.display = "none";
    }
  }

  function showNextContent() {
    hideAllContent();
    currentContent = (currentContent + 1) % cont.length;
    cont[currentContent].style.display = "block";
    cont[currentContent].style.opacity = 0.4;
    cont[currentContent].style.animation = "fadeInAndSlide 2s forwards";

    let x = 0.4;
    let intX = setInterval(function () {
      x += 0.1;
      cont[currentContent].style.opacity = x;
      if (x >= 1) {
        clearInterval(intX);
        x = 0.4;
      }
    });
  }


  function startAutoNext1() {
    setInterval(showNextContent, 3000);
  }

  // Call the function to start automatic next content on page load
  startAutoNext1();

  // Additional code for the review section
  let contreview = document.querySelectorAll(".review_section");
  let currentReview = 0;

  function hideAllReviews() {
    for (let i = 0; i < contreview.length; i++) {
      contreview[i].style.display = "none";
    }
  }

  function showNextReview() {
    hideAllReviews();
    currentReview = (currentReview + 1) % contreview.length;
    contreview[currentReview].style.display = "flex";
    contreview[currentReview].style.animation = "reviewAnimate 3s ease";

    let x = 0.4;
    let intX = setInterval(function () {
      x += 0.1;
      contreview[currentReview].style.opacity = x;
      if (x >= 1) {
        clearInterval(intX);
        x = 0.4;
      }
    });
  }


  function startAutoNext2() {
    setInterval(showNextReview, 3000);
  }

  // Call the function to start automatic next review on page load
  startAutoNext2();

  // Rest of the code (scroll handling) remains the same...



// -------------------------------Offer section------------------------------------------ 

document.addEventListener('DOMContentLoaded', function() {
  // Get all the list items and respective divs
  const listItems = document.querySelectorAll('#myList li');
  const divs = document.querySelectorAll('.right_content');

  // Show div1 on page load
  for(i=0;i<divs.length;i++){
    divs[i].style.display = "none";
  }
  
  document.getElementById('div1').style.display = 'flex';

  // Add click event listener to each list item
  listItems.forEach(item => {
    item.addEventListener('click', function() {
      // Get the ID of the div to be shown
      const targetDivId = item.getAttribute('data-target');

      // Hide all divs
      divs.forEach(div => {
        div.style.display = 'none';
      });

      // Show the selected div
      const targetDiv = document.getElementById(targetDivId);
      targetDiv.style.display = 'flex';
      targetDiv.style.transform = 'translateX(10px)';
    });
  });
});


window.addEventListener("scroll",()=>{
  if(window.scrollY>=8){
    let nav = document.querySelector("nav");
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.backdropFilter = "blur(5px)";
    nav.style.padding = "2% 4%";
    nav.style.background = "rgb(0,0,0,0.5)";
  }else{
    let nav = document.querySelector("nav");
    nav.style.position = "absolute";
    nav.style.backdropFilter = "none";
    nav.style.padding = "3% 4%";
    nav.style.background = "rgb(0,0,0,0)";
  }
})


// const Scrollbar = window.Scrollbar;
//     Scrollbar.init(document.querySelector('body'), 0.1);

// -------------- image gallry ------------------- 
$(document).ready(function(){
$('.img-slider-gallary').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:1000,
  responsive: [
    {
      breakpoint:700,
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint:900,
      settings:{
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
  });
});
