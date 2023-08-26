// The only changes made to this file is naming the function that closes the Nav Items. And I did that so we could re-execute it on click of the nav links to close the nav menu



const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const menu = document.querySelector(".nav__items");

// open nav menu
menuBtn.addEventListener("click", () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})



// close nav menu function
const closeNavMenu = () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
}

closeBtn.addEventListener("click", () => {
    closeNavMenu();
})



// add background style to navbar
window.addEventListener('scroll', () => {
   document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
  
})




// ADDED AFTER TUTORIAL
// close nav menu when any nav Items is clicked on tablets and mobile
const navItems = document.querySelectorAll('.nav__items li a');
if(window.innerWidth < 1024) {
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            closeNavMenu();
        })
    })
}