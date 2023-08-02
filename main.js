// <!-- HTML: Make sure the necessary HTML structure and classes are present. -->
const navbar = document.querySelector(".navlink");



function openMenu() {
  navbar.style.display = "block";
  navbar.style.top = "0";
}

function clsMenu() {
    navbar.style.top = "-1000px";
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

  function showPreviousContent() {
    hideAllContent();
    currentContent = (currentContent - 1 + cont.length) % cont.length;
    cont[currentContent].style.display = "block";
    cont[currentContent].style.opacity = 0.4;

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

  function showPreviousReview() {
    hideAllReviews();
    currentReview = (currentReview - 1 + contreview.length) % contreview.length;
    contreview[currentReview].style.display = "flex";
    contreview[currentReview].style.opacity = 0.4;

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
  let offset = window.pageYOffset;
  for(i = 0 ; i < cont.length ; i++){
  cont[i].style.backgroundPositionY = offset*0.7 + "px";}
});

window.addEventListener("scroll",()=>{
  let image = document.querySelector(".review_head");
  let offset = window.pageYOffset;
  for(i = 0 ; i < contreview.length ; i++){
 ;
  image.style.backgroundPosition = "center"+" "+(offset*0.015)+"%";
    console.log(offset*0.08);
  }
});

window.addEventListener("scroll",()=>{
  if(window.scrollY>=8){
    let nav = document.querySelector("nav");
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.backdropFilter = "blur(5px)";
    nav.style.padding = "0% 4%";
    nav.style.background = "rgb(0,0,0,0.5)";
  }else{
    let nav = document.querySelector("nav");
    nav.style.position = "absolute";
    nav.style.backdropFilter = "none";
    nav.style.padding = "3% 4%";
    nav.style.background = "rgb(0,0,0,0)";
  }
})

// ---------------- Image Galary -0--------------------------- 
const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 1;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);