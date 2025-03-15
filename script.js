// document.addEventListener("DOMContentLoaded", function () {
//     const contactNavBtn = document.getElementById("contact-nav-btn");
//     const contactPanel = document.getElementById("contact-panel");
//     const closePanel = document.getElementById("close-panel");
//     const loader = document.getElementById("loader");

//     let isPanelOpen = false; // Track panel state

//     // Toggle Contact Panel when clicking the button
//     contactNavBtn.addEventListener("click", (event) => {
//         event.preventDefault();
//         if (isPanelOpen) {
//             closeContactPanel();
//         } else {
//             openContactPanel();
//         }
//     });

//     // Close Panel when clicking the close button
//     closePanel.addEventListener("click", closeContactPanel);

//     // Close when clicking outside the panel
//     document.addEventListener("click", (event) => {
//         if (isPanelOpen && !contactPanel.contains(event.target) && event.target !== contactNavBtn) {
//             closeContactPanel();
//         }
//     });

//     // Close on Escape key press
//     document.addEventListener("keydown", (event) => {
//         if (isPanelOpen && event.key === "Escape") {
//             closeContactPanel();
//         }
//     });

//     function openContactPanel() {
//         contactPanel.classList.add("show");
//         document.body.classList.add("no-scroll"); // Prevent background scrolling
//         isPanelOpen = true;
//     }

//     function closeContactPanel() {
//         contactPanel.classList.remove("show");
//         document.body.classList.remove("no-scroll"); // Restore scrolling
//         isPanelOpen = false;
//     }

//     // Hide the loader once the full page has loaded
//     window.addEventListener("load", function () {
//         setTimeout(() => {
//             if (loader) {
//                 loader.classList.add("hidden");
//             }
//         }, 1200); // Delay for a smooth transition
//     });

//     // Initialize the slideshow after the page loads
//     const imagePaths = [
//         "/DSC06053.JPG", "/DSC06078.JPG", "/DSC06079.JPG", "/DSC06096.JPG", "/DSC06100.JPG"
//     ];

//     setTimeout(() => {
//         if (document.getElementById("mainImage")) {
//             new Slideshow(imagePaths);
//         }
//     }, 500); // Delay initialization slightly to ensure the DOM is fully ready
// });

// class Slideshow {
//     constructor(images) {
//         this.images = images;
//         this.currentIndex = 0;
//         this.mainImage = document.getElementById("mainImage");
//         this.caption = document.querySelector(".caption");
//         this.thumbnails = document.querySelectorAll(".thumbnail");
//         this.interval = null;

//         if (this.mainImage) {
//             this.showSlide(this.currentIndex);
//             this.startAutoSlide();
//             this.addKeyboardSupport();
//             this.addSwipeSupport();
//         } else {
//             console.error("Slideshow: mainImage not found.");
//         }
//     }

//     showSlide(index) {
//         this.currentIndex = index;
//         if (!this.mainImage) return;

//         this.mainImage.classList.remove("show");
//         setTimeout(() => {
//             this.mainImage.src = this.images[this.currentIndex];
//             this.mainImage.classList.add("show");
//             if (this.caption) {
//                 this.caption.innerText = `Event ${this.currentIndex + 1}`;
//             }
//             this.updateThumbnails();
//         }, 200);
//     }

//     changeSlide(direction) {
//         this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
//         this.showSlide(this.currentIndex);
//     }

//     updateThumbnails() {
//         this.thumbnails.forEach((thumb, idx) => {
//             thumb.classList.toggle("active-thumbnail", idx === this.currentIndex);
//         });
//     }

//     startAutoSlide() {
//         this.interval = setInterval(() => this.changeSlide(1), 3000);
//     }

//     pause() {
//         clearInterval(this.interval);
//     }

//     resume() {
//         this.startAutoSlide();
//     }

//     addKeyboardSupport() {
//         document.addEventListener("keydown", (e) => {
//             if (e.key === "ArrowLeft") this.changeSlide(-1);
//             if (e.key === "ArrowRight") this.changeSlide(1);
//         });
//     }

//     addSwipeSupport() {
//         let touchStartX = 0;
//         let touchEndX = 0;
//         const slideshowContainer = document.querySelector(".slideshow-container");

//         if (!slideshowContainer) {
//             console.error("Slideshow: .slideshow-container not found.");
//             return;
//         }

//         slideshowContainer.addEventListener("touchstart", (e) => {
//             touchStartX = e.changedTouches[0].screenX;
//         });

//         slideshowContainer.addEventListener("touchend", (e) => {
//             touchEndX = e.changedTouches[0].screenX;
//             if (touchEndX < touchStartX) this.changeSlide(1);
//             if (touchEndX > touchStartX) this.changeSlide(-1);
//         });
//     }
// }
// document.addEventListener("DOMContentLoaded", function () {
//     // Smooth Scrolling Function
//     function smoothScroll(target) {
//         const element = document.querySelector(target);
//         if (element) {
//             window.scrollTo({
//                 top: element.offsetTop - 80, // Adjust for navbar height
//                 behavior: "smooth"
//             });
//         }
//     }

//     // Click event for navigation links
//     document.querySelectorAll(".nav-link").forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             const targetId = this.getAttribute("href");
//             smoothScroll(targetId);
//         });
//     });

//     // Contact button - prevents scrolling
//     document.getElementById("contact-nav-btn").addEventListener("click", function (event) {
//         event.preventDefault();
//         openContactPanel(); // Call your existing function
//     });

//     // Mobile menu toggle
//     const menuToggle = document.querySelector(".menu-toggle");
//     const navLinks = document.querySelector(".nav-links");

//     menuToggle.addEventListener("click", function () {
//         navLinks.classList.toggle("active");
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const heading = document.querySelector(".hero1 h1");
//     const paragraph = document.querySelector(".hero1 p");

//     function animateText(element, delay = 500) {
//         element.style.opacity = "0";
//         element.style.transform = "translateY(20px)";
//         element.style.transition = "opacity 1s ease-out, transform 1s ease-out";

//         setTimeout(() => {
//             element.style.opacity = "1";
//             element.style.transform = "translateY(0)";
//         }, delay);
//     }

//     // Apply animations separately
//     animateText(heading, 500);
//     animateText(paragraph, 1000);
// });
document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("mainImage");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const thumbnails = document.querySelectorAll(".thumbnail");

    const imagePaths = [
        "/DSC06053.JPG", "/DSC06078.JPG", "/DSC06079.JPG", 
        "/DSC06096.JPG", "/DSC06100.JPG", "/DSC06403.JPG", 
        "/DSC06404.JPG", "/DSC06425.JPG", "/DSC06430.JPG"
    ];

    let currentIndex = 0;

    /*** 🖼️ Show Slide ***/
    function showSlide(index) {
        currentIndex = (index + imagePaths.length) % imagePaths.length; 
        mainImage.classList.remove("fade-in");

        setTimeout(() => {
            mainImage.src = imagePaths[currentIndex];
            mainImage.classList.add("fade-in");
            updateThumbnails();
        }, 200);
    }

    /*** ⏪ Previous Slide ***/
    prevBtn.addEventListener("click", function () {
        showSlide(currentIndex - 1);
    });

    /*** ⏩ Next Slide ***/
    nextBtn.addEventListener("click", function () {
        showSlide(currentIndex + 1);
    });

    /*** 🔄 Update Thumbnails ***/
    function updateThumbnails() {
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle("active-thumbnail", index === currentIndex);
        });
    }

    /*** 📱 Swipe Gesture Support ***/
    let touchStartX = 0;
    let touchEndX = 0;

    mainImage.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    mainImage.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX) showSlide(currentIndex + 1);
        if (touchEndX > touchStartX) showSlide(currentIndex - 1);
    });

    /*** ▶️ Auto Slide Every 5 Seconds ***/
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);

    /*** 🎬 Initialize First Slide ***/
    showSlide(0);
});

document.addEventListener("DOMContentLoaded", function () {
    const contactNavBtn = document.getElementById("contact-nav-btn");
    const contactPanel = document.getElementById("contact-panel");
    const closePanel = document.getElementById("close-panel");
    const loader = document.getElementById("loader");
    const navbar = document.querySelector(".navbar");

    let isPanelOpen = false;

    /*** 🏆 Loader Animation ***/
    window.addEventListener("load", function () {
        setTimeout(() => {
            if (loader) {
                loader.classList.add("hidden");
            }
        }, 1000);
    });

    /*** 📩 Contact Panel Toggle ***/
    contactNavBtn.addEventListener("click", (event) => {
        event.preventDefault();
        if (isPanelOpen) {
            closeContactPanel();
        } else {
            openContactPanel();
        }
    });

    closePanel.addEventListener("click", closeContactPanel);

    function openContactPanel() {
        contactPanel.classList.add("show");
        contactPanel.classList.add("pulse");
        document.body.classList.add("no-scroll");
        isPanelOpen = true;
    }

    function closeContactPanel() {
        contactPanel.classList.remove("show");
        document.body.classList.remove("no-scroll");
        isPanelOpen = false;
    }

    /*** 🎯 Smooth Scrolling with Animation ***/
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    /*** 🌟 Navbar Scroll Effect ***/
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    /*** 🎬 Hero Section Animations ***/
    function typeWriterEffect(element, text, speed = 50) {
        element.innerHTML = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    const heroText = document.querySelector(".hero1 h1");
    const heroParagraph = document.querySelector(".hero1 p");

    setTimeout(() => {
        typeWriterEffect(heroText, "🚀 Empowering Innovators, Building Startups!");
    }, 500);
    
    setTimeout(() => {
        typeWriterEffect(heroParagraph, "🌟 Join our community of aspiring entrepreneurs, innovators, and change-makers.");
    }, 2000);

    /*** ✨ Staggered Fade-in for Every Text & Button ***/
    document.querySelectorAll("h1, h2, h3, p, .cta-btn, .cta-btn-outline").forEach((element, index) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;

        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, 300);
    });

    /*** 🔥 Sections - Slide-in, Pop Effect, Scale-up ***/
    const sections = document.querySelectorAll(".section, .about, .events, .leaderboard-container, .unique-layout, .club-info");

    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    /*** 🌠 Image & Team Member Flip-in Animation ***/
    document.querySelectorAll(".image-container img, .member img").forEach(img => {
        img.style.opacity = "0";
        img.style.transform = "scale(0.8)";
        img.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

        window.addEventListener("scroll", function () {
            const imgTop = img.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (imgTop < windowHeight - 50) {
                img.style.opacity = "1";
                img.style.transform = "scale(1)";
            }
        });
    });

    /*** 🎞️ Slideshow with Zoom & Smooth Transitions ***/
    const imagePaths = [
        "/DSC06053.JPG", "/DSC06078.JPG", "/DSC06079.JPG", "/DSC06096.JPG", "/DSC06100.JPG"
    ];

    setTimeout(() => {
        if (document.getElementById("mainImage")) {
            new Slideshow(imagePaths);
        }
    }, 500);
});

/*** 🎞️ Slideshow Class with Smooth Zoom & Fade Transitions ***/
class Slideshow {
    constructor(images) {
        this.images = images;
        this.currentIndex = 0;
        this.mainImage = document.getElementById("mainImage");
        this.thumbnails = document.querySelectorAll(".thumbnail");
        this.interval = null;

        if (this.mainImage) {
            this.showSlide(this.currentIndex);
            this.startAutoSlide();
            this.addKeyboardSupport();
            this.addSwipeSupport();
        }
    }

    showSlide(index) {
        this.currentIndex = index;
        this.mainImage.classList.remove("show");

        setTimeout(() => {
            this.mainImage.src = this.images[this.currentIndex];
            this.mainImage.classList.add("show");
            this.updateThumbnails();
        }, 200);
    }

    changeSlide(direction) {
        this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
        this.showSlide(this.currentIndex);
    }

    updateThumbnails() {
        this.thumbnails.forEach((thumb, idx) => {
            thumb.classList.toggle("active-thumbnail", idx === this.currentIndex);
        });
    }

    startAutoSlide() {
        this.interval = setInterval(() => this.changeSlide(1), 3000);
    }

    pause() {
        clearInterval(this.interval);
    }

    resume() {
        this.startAutoSlide();
    }

    addKeyboardSupport() {
        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") this.changeSlide(-1);
            if (e.key === "ArrowRight") this.changeSlide(1);
        });
    }

    addSwipeSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        const slideshowContainer = document.querySelector(".slideshow-container");

        slideshowContainer.addEventListener("touchstart", (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        slideshowContainer.addEventListener("touchend", (e) => {
            touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX) this.changeSlide(1);
            if (touchEndX > touchStartX) this.changeSlide(-1);
        });
    }
}
const themeSwitch = document.getElementById("theme-switch");
const body = document.body;


document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeSwitch = document.getElementById("theme-switch");
    const navbar = document.querySelector(".navbar");

    if (!themeSwitch || !navbar) {
        console.error("Theme switch or navbar not found!");
        return;
    }

    // Load user preference from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        themeSwitch.checked = true;
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Transparent black
    }

    // Toggle Dark Mode
    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Transparent black
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            navbar.style.backgroundColor = "white"; // White in light mode
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeSwitch = document.getElementById("theme-switch");

    if (!themeSwitch) {
        console.error("Theme switch not found!");
        return;
    }

    // Load user preference from localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        body.classList.remove("light-mode");
        themeSwitch.checked = true;
    } else {
        body.classList.add("light-mode");
        body.classList.remove("dark-mode");
        themeSwitch.checked = false;
    }

    // Toggle Dark Mode
    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
            localStorage.setItem("darkMode", "enabled");
        } else {
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
        }
    });
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
    });
    slideIndex = (slideIndex + 1) % slides.length; // Loop back to first slide
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

