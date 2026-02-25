
 function toggleMenu() {
          const menu = document.getElementById("nav-menu");
          const hamburger = document.querySelector(".hamburger");
          const overlay = document.querySelector(".menu-overlay");
          
          menu.classList.toggle("show");
          overlay.classList.toggle("active");
          document.body.classList.toggle("menu-open");
          
          // Toggle icons
          const hamburgerIcon = document.querySelector(".hamburger-icon");
          const closeIcon = document.querySelector(".close-icon");
          if (menu.classList.contains("show")) {
            hamburgerIcon.style.display = "none";
            closeIcon.style.display = "block";
          } else {
            hamburgerIcon.style.display = "block";
            closeIcon.style.display = "none";
          }
        }
        Copy
         function animateCounter(id, start, end, duration) {
        let obj = document.getElementById(id);
        let range = end - start;
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = timestamp - startTime;
            let increment = Math.min(start + (range * (progress / duration)), end);
            obj.textContent = Math.floor(increment) + "+"; // Add + without comma

            if (progress < duration) {
                requestAnimationFrame(step);
            } else {
                obj.textContent = end + "+"; // Final value with +
            }
        }

        requestAnimationFrame(step);
    }

    // Run the counter animation
    animateCounter("happyClients", 0, 10000, 3000);
       // Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show/hide button when scrolling
window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to top when clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
/* Add this JavaScript part */
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        // Close mobile menu
        document.querySelector('.nav-links').classList.remove('show');
        document.querySelector('.menu-overlay').classList.remove('active');
        document.body.classList.remove('menu-open');
        
        // Optional: Close hamburger menu
        const hamburger = document.querySelector('.hamburger');
        if (hamburger) {
            hamburger.classList.remove('active');
        }
        
        // Add slight delay for smooth transition
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 300);
    });
});

// You can add custom JavaScript here for advanced features
// Smooth Scroll on Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

