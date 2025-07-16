function showProjectButton() {
  const selectedSkill = document.getElementById("skillSelect").value;
  const buttonContainer = document.getElementById("projectButtonContainer");

  if (selectedSkill) {
    buttonContainer.innerHTML = `<button onclick="showProjectLevels('${selectedSkill}')">See Projects</button>`;
  } else {
    buttonContainer.innerHTML = "";
  }
}

function showProjectLevels(skill) {
  const container = document.getElementById("projectLevelsContainer");

  container.innerHTML = `
    <h3>Projects for ${skill}</h3>
    <button onclick="showProjects('${skill}', 'Basic')">Basic</button>
    <button onclick="showProjects('${skill}', 'Intermediate')">Intermediate</button>
    <button onclick="showProjects('${skill}', 'High')">High Level</button>
  `;
}

function showProjects(skill, level) {
  const display = document.getElementById("projectDisplay");

  // Tum future me yahan apne actual projects daal sakte ho
  display.innerHTML = `<p>Showing ${level} projects for <strong>${skill}</strong></p>`;
}
