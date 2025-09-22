// Fetch and render skills
function loadSkills() {
  fetch('JSON/skills.json')
    .then(response => response.json())
    .then(data => {
      const skillsContainer = document.getElementById('skills-container');
      data.skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill');
        skillDiv.textContent = skill;
        skillsContainer.appendChild(skillDiv);
      });
    })
    .catch(err => console.error('Error loading skills:', err));
}

document.addEventListener('DOMContentLoaded', () => {
  loadSkills();
});
