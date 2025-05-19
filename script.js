// Form handling
document.addEventListener("DOMContentLoaded", () => {
  // Get both forms
  const contactForm = document.querySelector(".contact form");
  const heroButton = document.querySelector(".hero-text button");
  const messageBox = document.getElementById("messageBox");
  const closeMessage = document.querySelector(".close-message");

  // Function to show message box
  function showMessage() {
    messageBox.classList.add("active");
  }

  // Function to hide message box
  function hideMessage() {
    messageBox.classList.remove("active");
  }

  // Close message box when clicking the close button
  closeMessage.addEventListener("click", hideMessage);

  // Close message box when clicking outside
  messageBox.addEventListener("click", (e) => {
    if (e.target === messageBox) {
      hideMessage();
    }
  });

  // Handle contact form submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form inputs
    const nameInput = contactForm.querySelector(".name-input input");
    const emailInput = contactForm.querySelector(".email-input input");
    const messageInput = contactForm.querySelector(".message-area textarea");

    // Reset previous error states
    nameInput.classList.remove("error");
    emailInput.classList.remove("error");

    // Validate inputs
    let isValid = true;

    if (!nameInput.value.trim()) {
      nameInput.classList.add("error");
      isValid = false;
    }

    if (!emailInput.value.trim()) {
      emailInput.classList.add("error");
      isValid = false;
    }

    if (!isValid) {
      return; // Stop form submission if validation fails
    }

    // Get form data
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    // Log form data to console
    console.log("Form Submission:", formData);

    // Clear form
    contactForm.reset();

    // Show custom message box
    showMessage();
  });

  // Handle hero button click
  heroButton.addEventListener("click", () => {
    // Scroll to contact section
    document.querySelector(".contact").scrollIntoView({
      behavior: "smooth",
    });
  });

  // Mobile menu functionality
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    menuBtn.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuBtn.classList.remove("active");
  });

  // Close menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });
});
