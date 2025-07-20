// Mobile Menu Function
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Scroll shadow effect
window.onscroll = function () {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
};

// Typing animation
var typingEffect = new Typed(".typedText", {
  strings: ["Web Developer", "Java Developer", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// Scroll reveal animations
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });
sr.reveal(".top-header", {});
sr.reveal(".about-info", { delay: 100 });
sr.reveal(".contact-info", { delay: 100 });
sr.reveal(".skills-grid", { delay: 100 });
sr.reveal(".form-control", { delay: 100 });
sr.reveal(".project-card", { interval: 200 });

// Active link logic
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

// Animate progress bars when they come into view
const animateProgressBars = () => {
  const progressBars = document.querySelectorAll('.progress');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        // Get the width from the parent's data attribute or default to 100%
        const targetWidth = progressBar.parentElement.getAttribute('data-width') || '100%';
        progressBar.style.width = targetWidth;
        observer.unobserve(progressBar);
      }
    });
  }, { 
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px' // Trigger when 50px from bottom of viewport
  });

  // Initialize all progress bars to 0 width
  progressBars.forEach(bar => {
    bar.style.width = '0';
    observer.observe(bar);
  });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Start the progress bar animations
  animateProgressBars();
  
  // Add click event for mobile menu links to close menu after click
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        document.getElementById('myNavMenu').className = 'nav-menu';
      }
    });
  });
  
  // Form submission handler (placeholder - you can add your own logic)
  const contactForm = document.querySelector('.form-control');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Here you would typically send the form data to a server
      alert('Form submitted! (This is a placeholder - implement your own form handling)');
      // Reset form after submission
      this.reset();
    });
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});