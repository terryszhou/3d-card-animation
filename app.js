// Movement Animation to Happen
var card = document.querySelector(".card");
var container = document.querySelector(".container");
// Items
var title = document.querySelector(".title");
var sneaker = document.querySelector(".sneaker img");
var purchase = document.querySelector(".purchase");
var description = document.querySelector(".info h3");
var sizes = document.querySelector(".sizes");
// Movement Animation Eventid
container.addEventListener("mousemove", function (e) {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    var yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card.style.transform = "rotateY(".concat(xAxis, "deg) rotateX(").concat(yAxis, "deg)");
});
// Animate In
container.addEventListener("mouseenter", function (e) {
    card.style.transition = "none";
    // Popout
    title.style.transform = "translateZ(200px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(250px)";
});
// Animate Out
container.addEventListener("mouseleave", function (e) {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
    // Snapback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});
