const hamburger = document.querySelector(".hamburgerr");
const navLinks = document.querySelector(".nav-linkss");
const links = document.querySelectorAll(".nav-linkss li");
const nav=document.querySelector('#nav');

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fadee");
    });
    //Hamburger Animation
    hamburger.classList.toggle("togglee");
   
});

function Zatvori(){
    hamburger.classList.toggle("togglee");
    navLinks.classList.remove("open");
    links.forEach(link=>{
        link.classList.toggle("fadee");
    });
}


let pocetnaBtn=document.querySelector('[href="p"]');
let onamaBtn=document.querySelector('[href="o"]');
let galerijaBtn=document.querySelector('[href="g"]');
let kontaktBtn=document.querySelector('[href="k"]');


let pocetna=document.querySelector('#pocetna');
let oNama=document.querySelector('#onama');
let galerija=document.querySelector('#galerija');
let kontakt=document.querySelector('#kontakt');
let pocetnaB=document.querySelector('#pocetnaB');


pocetnaBtn.addEventListener('click',function(e){
    e.preventDefault();
    pocetna.style.display="block";
    pocetnaB.style.display="block";
    window.scrollTo(0,{
        top: 0,
        behavior: 'smooth'
      });
    oNama.style.display="none";
    galerija.style.display="none";
    kontakt.style.display="none";
    
      if(window.innerWidth<800){
          Zatvori();
      }
   
    
      
});

onamaBtn.addEventListener('click',function(e){
    e.preventDefault();
    oNama.style.display="block";
    window.scrollTo(0,{
        top: 0,
        behavior: 'smooth'
      });
    pocetna.style.display="none";
    galerija.style.display="none";
    kontakt.style.display="none";
    pocetnaB.style.display="none";
   
        if(window.innerWidth<800){
            Zatvori();
        }
      
});

galerijaBtn.addEventListener('click',function(e){
    e.preventDefault();
    galerija.style.display="block";
    window.scrollTo(0,{
        top: 0,
        behavior: 'smooth'
      });
    pocetna.style.display="none";
    oNama.style.display="none";
    
    kontakt.style.display="none";
    pocetnaB.style.display="none";
   
        if(window.innerWidth<800){
            Zatvori();
        }
     
   
});

kontaktBtn.addEventListener('click',function(e){
    e.preventDefault();
    kontakt.style.display="block";
    window.scrollTo(0,{
        top: 0,
        behavior: 'smooth'
      });
    pocetna.style.display="none";
    oNama.style.display="none";
    galerija.style.display="none";
    pocetnaB.style.display="none";
   
        if(window.innerWidth<800){
            Zatvori();
        }
      
});

/**Prikaz slika */



baguetteBox.run('.tz-gallery');

function myFunction() {
    let element = document.getElementById("gallery-preview");
    element.classList.remove("visible");
    let element1=document.getElementById("nav");
    element1.classList.remove("topPozicija");
  }
  
  function init(){
      bindGalleryItems();
      bindKeydown();
  }
  
  function bindGalleryItems(){
      let images=document.querySelectorAll('.pI a');
  
      for(let image of images){
          image.addEventListener('click',showImage);
      }
  }
  
  function showImage(event){
      event.preventDefault();
      let link=event.target.parentElement.href;
  
      let image=document.querySelector("#gallery-preview img");
  
      image.src=link;
  
      let element = document.getElementById("gallery-preview");
      element.classList.add("visible");
  
    let element1=document.getElementById("nav");
     element1.classList.add("topPozicija");
  }
  function bindKeydown(){
      window.addEventListener('keydown',keyDownHandler);
  }
  
  function keyDownHandler(event){
      switch(event.key){
          case"Escape":
          myFunction();
          break;
      }
  }
  window.addEventListener('load',init);



 