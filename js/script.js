'use strict';   // This statement tells the browser to use the Strict mode application for Js file or any specific function, just to make our code safe.
let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


   /*===== SHOW NAVBAR  =====*/ 
   const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if(toggle){
        toggle.addEventListener('click', ()=>{
            // change icon
            toggle.classList.toggle('bx-x')
            
        })
    }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))