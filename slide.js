
var i = 0;
var images = [];
var time = 1000;

images[0] = 'img/doubel-nike.png';
images[1] = 'img/glass.png';
images[2] = 'img/high-heels.png';
images[3] = 'img/shine.png';

function changeImg(){
  document.slide.src =images[i];

  if(i < images.length - 1){
    i++;
  }
else{
  i = 0;
} 
setTimeout("changeImg()", time)
}
window.onload = changeImg;


// const productContainers = [...document.querySelectorAll('.shopping')];
// const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
// const preBtn = [...document.querySelectorAll('.pre-btn')];

// productContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtn[i].addEventListener('click', () => {
//     item.scrollLeft += containerWidth;
//   })
  
//   preBtn[i].addEventListener('click', () => {
//     item.scrollLeft -=containerWidth;
//   })
// })

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
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

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btns");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



let currentIndex = 0;

function showSlide(index) {
  const slider = document.querySelector('.slideing');
  const slides = document.querySelectorAll('.slideing img');
  const slideWidth = slides[0].clientWidth;

  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const transformValue = -currentIndex * slideWidth + 'px';
  slider.style.transform = 'translateX(' + transformValue + ')';
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// setInterval(nextSlide, 3000);