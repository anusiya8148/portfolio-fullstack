// ================= PAGE FADE IN =================
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";
});


// ================= NAVIGATION BUTTONS =================
function goToContact() {
    window.location.href = "contact.html";
}

function goToPortfolio() {
    window.location.href = "portfolio.html";
}


// ================= LOAD PROJECTS =================
document.addEventListener("DOMContentLoaded", function () {

    const projectList = document.getElementById("projectList");

    if (projectList) {
        fetch("/projects")   // 🔥 changed here
        .then(res => res.json())
        .then(data => {

            data.forEach(project => {
                projectList.innerHTML += `
                    <div class="project-card">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.githubLink}" target="_blank">GitHub</a>
                    </div>
                `;
            });

        })
        .catch(error => console.log("Error loading projects:", error));
    }

});