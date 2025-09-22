// Fetch and render timeline
function loadTimeline() {
  fetch("JSON/experience.json")
    .then((response) => response.json())
    .then((data) => {
      const timelineContainer = document.getElementById("timeline-container");
      data.timeline.forEach((item) => {
        const timelineItem = document.createElement("div");
        timelineItem.classList.add("timeline-item");
        timelineItem.innerHTML = `
          <h3>${item.role} | ${item.period}</h3>
          <span>${item.company}</span>
          <p>${item.description}</p>
        `;
        timelineContainer.appendChild(timelineItem);
      });
    })
    .catch((err) => console.error("Error loading timeline:", err));
}

document.addEventListener("DOMContentLoaded", () => {
  loadTimeline();
});
