var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var get = this.nextElementSibling;
    if (get.style.maxHeight) {
      get.style.maxHeight = null;
    } else {
      get.style.maxHeight = get.scrollHeight + "px";
    } 
  });
}




        
