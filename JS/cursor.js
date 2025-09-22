const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener("mousedown", () => {
  cursor.style.width = "30px";
  cursor.style.height = "30px";
});

document.addEventListener("mouseup", () => {
  cursor.style.width = "20px";
  cursor.style.height = "20px";
});
