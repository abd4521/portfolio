// Particles.js Config
document.addEventListener('DOMContentLoaded', function() {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00f7ff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "animation": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#00f7ff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                }
            }
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
// Contact Form Submission
const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Sending...";

    // Send form data
    const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
    });

    const result = await response.json();

    if (result.success) {
        alert("Message sent successfully! I'll get back to you soon.");
        form.reset();
    } else {
        alert("Error: " + result.message);
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
});