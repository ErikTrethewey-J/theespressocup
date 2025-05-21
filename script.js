// Toggle mobile nav visibility
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Handle contact form submission
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.textContent = "Sending...";
      status.style.display = "block";

      // Simulated message send
      setTimeout(() => {
        status.textContent = "Message sent! I’ll get back to you soon.";
        form.reset();
      }, 1200);
    });
  }
});
