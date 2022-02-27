// Movement Animation to Happen
const card: HTMLElement = document.querySelector<HTMLElement>(".card")!;
const container: HTMLElement = document.querySelector<HTMLElement>(".container")!;

// Movement Animation Eventid
container.addEventListener("mousemove", (e: MouseEvent): void => {
  let xAxis: number = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis: number = (window.innerWidth / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e: MouseEvent): void => {
  card.style.transition = "none";
});

// Animate Out
container.addEventListener("mouseleave", (e: MouseEvent): void => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


