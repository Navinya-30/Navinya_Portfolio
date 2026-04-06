// ================= LOAD PROJECTS DYNAMICALLY =================
fetch("projects.json")
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById("projects-container");

    projects.forEach(project => {
      const card = document.createElement("div");
      card.classList.add("project-card");

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <p><strong>Tech:</strong> ${project.tech.join(", ")}</p>
        <a href="${project.link}" target="_blank">View Project →</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error loading projects:", err);
  });


// ================= SMOOTH SCROLL (for older browsers) =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// ================= SIMPLE FADE-IN ANIMATION =================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(30px)";
  section.style.transition = "0.6s ease";
  observer.observe(section);
});
