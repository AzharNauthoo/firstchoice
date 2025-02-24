document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-tabs .nav-link");
    const scrollOffset = 80; // Adjust this value to scroll slightly upwards

    function activateTab(target) {
        // Remove active class from all tabs
        navLinks.forEach(link => {
            link.classList.remove("active");
            link.style.color = "#000000";
        });

        // Add active class to clicked tab & override styles
        target.classList.add("active");
        // target.style.borderLeft = "1px solid #000000"; // Optional bottom border
    }

    // navLinks.forEach(link => {
    //     link.addEventListener("click", function (e) {
    //         activateTab(this);
    //     });
    // });

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            activateTab(this);

            // Get the target section ID
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - scrollOffset, // Scroll slightly upwards
                    behavior: 'smooth'
                });
            }
        });
    });
});

