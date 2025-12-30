document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target); // animate once
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenElements.forEach(el => observer.observe(el));

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

});

const profilePic = document.querySelector(".profile-pic");

if (profilePic) {
    document.addEventListener("mousemove", e => {
        const x = (window.innerWidth / 2 - e.clientX) / 30;
        const y = (window.innerHeight / 2 - e.clientY) / 30;

        profilePic.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    });

    document.addEventListener("mouseleave", () => {
        profilePic.style.transform = "translate(0,0) scale(1)";
    });
}
document.querySelectorAll(".cert-link").forEach(link => {
    link.addEventListener("mouseenter", () => {
        link.style.textShadow = "0 0 8px rgba(0,123,255,0.6)";
    });

    link.addEventListener("mouseleave", () => {
        link.style.textShadow = "none";
    });
});
