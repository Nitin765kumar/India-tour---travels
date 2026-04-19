document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("reveal-ready");

    const revealElements = document.querySelectorAll("[data-reveal]");

    function revealOnScroll() {
        revealElements.forEach(function (element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("active");
            }
        });
    }

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);

    const searchBtn = document.getElementById("searchBtn");
    const searchDest = document.getElementById("searchDest");
    const searchPackage = document.getElementById("searchPackage");

    if (searchBtn && searchDest && searchPackage) {
        searchBtn.addEventListener("click", function () {
            const dest = searchDest.value.toLowerCase().trim();
            const pkg = searchPackage.value;

            if (!dest && pkg === "all") {
                window.location.href = "packages.html";
                return;
            }

            if (dest.includes("agra") || dest.includes("taj")) {
                window.location.href = "packages.html#agra";
            } else if (dest.includes("goa")) {
                window.location.href = "packages.html#goa";
            } else if (dest.includes("kerala")) {
                window.location.href = "packages.html#kerala";
            } else if (dest.includes("manali")) {
                window.location.href = "packages.html#manali";
            } else if (dest.includes("kashmir")) {
                window.location.href = "packages.html#kashmir";
            } else {
                window.location.href = "packages.html";
            }
        });
    }

    const newsletterBtn = document.getElementById("newsletterBtn");
    const newsletterInput = document.getElementById("newsletterEmail");

    if (newsletterBtn && newsletterInput) {
        newsletterBtn.addEventListener("click", function () {
            const email = newsletterInput.value.trim();

            if (!email || !email.includes("@")) {
                alert("Please enter a valid email address.");
                return;
            }

            newsletterBtn.innerHTML = "Subscribed";
            newsletterBtn.style.background = "#3eac07";

            setTimeout(function () {
                newsletterBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
                newsletterBtn.style.background = "";
                newsletterInput.value = "";
            }, 2000);
        });
    }
});
