// Movement Animation to Happen
const card: HTMLElement = document.querySelector<HTMLElement>(".card")!;
const container: HTMLElement = document.querySelector<HTMLElement>(".container")!;

// Items
const title: HTMLElement = document.querySelector(".title")!;
const sneaker: HTMLElement = document.querySelector(".sneaker img")!;
const purchase: HTMLElement = document.querySelector(".purchase")!;
const description: HTMLElement = document.querySelector(".info h3")!;
const sizes: HTMLElement = document.querySelector(".sizes")!;

// Movement Animation Eventid
container.addEventListener("mousemove", (e: MouseEvent): void => {
  let xAxis: number = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis: number = (window.innerWidth / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e: MouseEvent): void => {
  card.style.transition = "none";
  // Popout
  title.style.transform = "translateZ(200px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(200px)";
  purchase.style.transform = "translateZ(75px)";
});

// Animate Out
container.addEventListener("mouseleave", (e: MouseEvent): void => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Snapback
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});


