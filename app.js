// Movement Animation to Happen
var card = document.querySelector(".card");
var container = document.querySelector(".container");
// Movement Animation Eventid
container.addEventListener("mousemove", function (e) {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    var yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card.style.transform = "rotateY(".concat(xAxis, "deg) rotateX(").concat(yAxis, "deg)");
});
// Animate In
container.addEventListener("mouseenter", function (e) {
    card.style.transition = "none";
});
// Animate Out
container.addEventListener("mouseleave", function (e) {
    card.style.transition = "all 0.5s ease";
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
});
