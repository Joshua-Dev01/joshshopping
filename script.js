function openNav() {
    document.querySelector(".nav-links").classList.toggle("show");
  }
  

  function closeNav() {
    document.querySelector(".nav-links").style.display = "none";
   }



function see(){
  var x = document.getElementById("word");
  if (x.type === "password"){
    x.type = "text";
  }
  else{
    x.type = "password";
  }
}

function sees(){
  var x = document.getElementById("words");
  if (x.type === "password"){
    x.type = "text";
  }
  else{
    x.type = "password";
  }
}
