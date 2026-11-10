

//1. WELCOME MESSAGE

document.addEventListener("DOMContentLoaded",function() {

    console.log("Welcome to Bello Fiore!");
});


//2.ACTIVE NAVIGATION

const currentPage =
window.location.pathname.split("/").pop();

const navLinks =
document.querySelectorAll("nav a");

navLinks.forEach(function(link){

    const linkPage =
link.getAttribute("href");

 if(linkPage === currentPage){
    link.classList.add("active");
 }
});

//3. BACK TO TOP BUTTON

const backToTop =
document.createElement("button");

backToTop.innerHTML = "&#8593;";

backToTop.className = "back-to-top";

backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", function(){

    if (window.scrollY > 300){
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});

//4.PRODUCT CARD ANIMATION

const productsCard =
document.querySelectorAll(

    "product-card, .collection-card, .offer-card"
);

const observer = new
IntersectionObserver(function (entries){

    entries.forEach(function(entries){

        if (entry.isInserting){

            entry.target.classList.add("show");

            observer.unobserve(entry.target);
        }
    });

}, {
    threshold:0.15
});

productsCard.forEach(function(card){

    card.classList.add("reveal");

    observer.observe(card);
});

//5.WHATSAPP BUTTON MESSAGE 

const whatsappLinks =
document.querySelectorAll(
    'a[href*="wa.me"]'
);

whatsappLinks. forEach(function(link){

    link.setAttribute("target", "_blank");

    link.setAttribute("rel", "nooper noreferrer");
});

//6.CURRENT YEAR IN FOOTER

const yearElements =
document.querySelectorAll(".current-year");

yearElements. foreach(function(element){

    element.textContent = new
Date().getFullYear();
})