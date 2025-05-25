document.addEventListener("DOMContentLoaded", () => {
  // 🍔 Hamburger menu toggle
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // 📬 Contact form submission
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      };

      status.textContent = "Sending...";
      status.style.display = "block";

      try {
        const response = await fetch("https://theespressocup-server.onrender.com/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          status.textContent = "Message sent! I’ll get back to you soon.";
          form.reset();
        } else {
          status.textContent = "Something went wrong.";
        }
      } catch (error) {
        console.error(error);
        status.textContent = "Failed to connect to server.";
      }
    });
  }
});

