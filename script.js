const sections = document.querySelectorAll(".section, .profile");

sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
            sec.style.transition = "0.8s";
        }
    });
});