

function signup(){
    alert ("Sorry! website still under construction, \r\n \r\n You will get updated when it is done,\r\n keep a tab on my social media handles, \r\n \r\n © OLARINDE BUKUNMI 2022");
  }
  
  function dimmode(){
     alert("Oops! darkmode unavailable at the moment");
     }
     


let barButton=document.querySelector('.bars');
let headerUl=document.querySelector('header ul');
let closebar=document.querySelector(".closebar");

barButton.onclick=()=>{
    headerUl.style.left="0";
    closebar.style.display="block";
    barButton.style.display="none";
}

closebar.onclick=()=>{
    headerUl.style.left="-100%";
    closebar.style.display="none";
    barButton.style.display="block";
}

function closethebar(){
    let barButton=document.querySelector('.bars');
let headerUl=document.querySelector('header ul');
let closebar=document.querySelector(".closebar");
let firstpage=document.querySelector("section.welcome");
let secondpage=document.querySelector(".seecard");

    headerUl.style.left="-100%";
    closebar.style.display="none";
    barButton.style.display="block";
    firstpage.style.display="none";
    secondpage.style.display="block";

  //  console.log('close');
}

function showFirstPageClosebar(){
    let barButton=document.querySelector('.bars');
let headerUl=document.querySelector('header ul');
let closebar=document.querySelector(".closebar");
let firstpage=document.querySelector("section.welcome");
let secondpage=document.querySelector(".seecard");

    headerUl.style.left="-100%";
    closebar.style.display="none";
    barButton.style.display="block";
    firstpage.style.display="block";
    secondpage.style.display="none";

 //   console.log('close');
}

let firstpage=document.querySelector("section.welcome");
let secondpage=document.querySelector(".seecard");
let seemore=document.querySelector(".see-more");
let homebutton=document.querySelector(".homelink");

seemore.onclick=()=>{
    firstpage.style.display="none";
    secondpage.style.display="block";
}

homebutton.onclick=()=>{
    firstpage.style.display="block";
    secondpage.style.display="none";
}



function load(){
    setInterval(rotate,3500); 

    var i=0;
var txt="Fullstack web developer & Software Engineer";
var text=document.getElementById("about");

function type(){
if(i<txt.length){
text.innerHTML+=txt.charAt(i); i++;
}
setInterval(type,2000);     
}
type();
             }

function rotate(){
    document.getElementById("loader").style.display="none";
    document.querySelector(".container-holder").style.display="block";

//setInterval(rotate,5000);
}




