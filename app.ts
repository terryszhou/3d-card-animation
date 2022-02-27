// Movement Animation to Happen
const card: HTMLElement = document.querySelector<HTMLElement>(".card")!;
const container: HTMLElement = document.querySelector<HTMLElement>(".container")!;

// Movement Animation Eventid;
container.addEventListener("mousemove", (e: MouseEvent) => {
  let xAxis: number = (window.innerWidth / 2 - e.pageX);
  let yAxis: number = (window.innerWidth / 2 - e.pageY);
  card.style.transform = `rotateY(${yAxis}deg) rotatex(${xAxis}deg)`;
});


