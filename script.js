
const projects = [

    {
        category: "WEB DESIGN",
        type: "WEB",
        title: "StudyFlow",
        description:
            "Умный сайт для студентов, где можно планировать учебу, ставить цели и отслеживать свой прогресс.",
        tags: ["HTML", "CSS", "JavaScript"]
    },

    {
        category: "MOBILE APP",
        type: "APP",
        title: "Foodly",
        description:
            "Приложение, которое помогает находить интересные кафе и рестораны рядом с пользователем.",
        tags: ["UI/UX", "Mobile", "Maps"]
    },

    {
        category: "ARTIFICIAL INTELLIGENCE",
        type: "AI",
        title: "MindBox",
        description:
            "Персональный AI-помощник для создания заметок, генерации идей и организации задач.",
        tags: ["Python", "AI", "API"]
    },

    {
        category: "GAME DEVELOPMENT",
        type: "GAME",
        title: "Neon Run",
        description:
            "Небольшая динамичная браузерная игра в неоновом стиле с уровнями и системой рекордов.",
        tags: ["JavaScript", "Canvas", "Game"]
    },

    {
        category: "WEB DESIGN",
        type: "WEB",
        title: "Portfolio X",
        description:
            "Современное минималистичное портфолио для дизайнера или начинающего разработчика.",
        tags: ["HTML", "CSS", "Animation"]
    },

    {
        category: "MOBILE APP",
        type: "APP",
        title: "MoveUp",
        description:
            "Трекер тренировок с целями, статистикой, достижениями и историей активности.",
        tags: ["App", "Fitness", "UI"]
    },

    {
        category: "ARTIFICIAL INTELLIGENCE",
        type: "AI",
        title: "CodeMate",
        description:
            "Помощник программиста, который объясняет ошибки кода простым человеческим языком.",
        tags: ["AI", "Python", "Coding"]
    },

    {
        category: "WEB DESIGN",
        type: "WEB",
        title: "Focus Space",
        description:
            "Онлайн-пространство для концентрации с таймером, музыкой и статистикой продуктивности.",
        tags: ["JavaScript", "UX", "Productivity"]
    }

];


let currentProject = 0;


/* GENERATE PROJECT */

function generateProject() {

    const random =
        Math.floor(Math.random() * projects.length);

    currentProject = random;

    const project = projects[random];

    document.getElementById("projectNumber").textContent =
        String(random + 1).padStart(2, "0");

    document.getElementById("generatedCategory").textContent =
        project.category;

    document.getElementById("generatedTitle").textContent =
        project.title;

    document.getElementById("generatedDescription").textContent =
        project.description;

    const tags =
        document.getElementById("generatedTags");

    tags.innerHTML = "";

    project.tags.forEach(tag => {

        const span = document.createElement("span");

        span.textContent = tag;

        tags.appendChild(span);

    });

    const box =
        document.querySelector(".generator-box");

    box.animate(
        [
            {
                opacity: .5,
                transform: "translateY(8px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 350,
            easing: "ease-out"
        }
    );
}


/* MODAL */

function showMessage(projectName) {

    document.getElementById("modalTitle").textContent =
        projectName;

    document.getElementById("modal").classList.add("active");
}


function closeModal() {

    document.getElementById("modal").classList.remove("active");
}


document.getElementById("modal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            closeModal();
        }

    }
);


/* SEARCH */

function searchProjects() {

    const query =
        document.getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const cards =
        document.querySelectorAll(".project-card");

    cards.forEach(card => {

        const text =
            card.textContent.toLowerCase();

        if (text.includes(query)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


/* CATEGORY FILTER */

function filterCategory(type) {

    const cards =
        document.querySelectorAll(".project-card");

    cards.forEach(card => {

        const text =
            card.textContent.toUpperCase();

        if (type === "WEB" && text.includes("WEB")) {
            card.style.display = "";
        }

        else if (type === "APP" && text.includes("APP")) {
            card.style.display = "";
        }

        else if (type === "AI" && text.includes("AI")) {
            card.style.display = "";
        }

        else if (
            type === "GAME" &&
            text.includes("GAME")
        ) {
            card.style.display = "";
        }

        else {
            card.style.display = "none";
        }

    });

    document
        .getElementById("projects")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* TOP */

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* KEYBOARD SHORTCUT */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeModal();
        }

        if (
            event.key.toLowerCase() === "g" &&
            event.ctrlKey
        ) {
            event.preventDefault();
            generateProject();
        }

    }
);
