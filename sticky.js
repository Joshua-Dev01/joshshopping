window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
  });




  ScrollReveal({
    reset: true,
    distance:'60px',
    duration: 2500,
    delay: 400
   });
   ScrollReveal().reveal('.text', { delay: 700, origin: 'left' });
   
   const toggle = document.getElementById('toggleDark');
   const body = document.querySelector('body');
   
   toggle.addEventListener('click', function(){
     this.classList.toggle('white-mode');
     if(this.classList.toggle('Darkmode')){
       body.style.background = 'white';
       body.style.color = 'black';
       body.style.transition = '3s';
     }else{
       body.style.background = 'black';
       body.style.color = 'white';
       body,style.transition = '3s'
     }
   })