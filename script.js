function showProjectButton() {
  const skill = document.getElementById("skillSelect").value;
  document.getElementById("projectLevelSection").style.display = skill ? "block" : "none";
  document.getElementById("levelButtons").style.display = "none";
  document.getElementById("projectDisplay").innerHTML = "";
}

function showLevels() {
  document.getElementById("levelButtons").style.display = "block";
  document.getElementById("projectDisplay").innerHTML = "";
}

function showProjects(level) {
  const skill = document.getElementById("skillSelect").value;
  let content = `<h3>${skill} - ${level.charAt(0).toUpperCase() + level.slice(1)} Projects</h3><ul>`;

  if (skill === "HTML" && level === "basic") {
    content += "<li>My First HTML Page</li><li>Basic Resume Layout</li>";
  } else if (skill === "CSS" && level === "intermediate") {
    content += "<li>Responsive Card Design</li><li>Animated Navigation Bar</li>";
  } else if (skill === "JavaScript" && level === "high") {
    content += "<li>Weather App Using API</li><li>To-Do List with Local Storage</li>";
  } else {
    content += "<li>Coming Soon...</li>";
  }

  content += "</ul>";
  document.getElementById("projectDisplay").innerHTML = content;
}

