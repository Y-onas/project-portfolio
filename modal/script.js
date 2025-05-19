document.addEventListener("DOMContentLoaded", () => {
  // Selectors
  const modals = document.querySelectorAll(".modal");
  const nextButtons = document.querySelectorAll("#next-modal");
  const prevButtons = document.querySelectorAll("#prev-modal");
  const closeButtons = document.querySelectorAll(".close-modal");
  const prevArrows = document.querySelectorAll(".prev-image");
  const nextArrows = document.querySelectorAll(".next-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  // State
  let currentModalIndex = 0;

  // === Show specific modal ===
  function showModal(index) {
    modals.forEach((modal) => modal.classList.remove("active"));
    modals[index].classList.add("active");
    updateButtonStates(index);
  }

  // === Update next/prev button states ===
  function updateButtonStates(index) {
    prevButtons.forEach((button) => {
      button.disabled = index === 0;
    });

    nextButtons.forEach((button) => {
      button.disabled = index === modals.length - 1;
    });
  }

  // === Initialize the first modal ===
  showModal(currentModalIndex);

  // === Next Button Click Event ===
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentModalIndex < modals.length - 1) {
        currentModalIndex++;
        showModal(currentModalIndex);
      }
    });
  });

  // === Prev Button Click Event ===
  prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentModalIndex > 0) {
        currentModalIndex--;
        showModal(currentModalIndex);
      }
    });
  });

  // === Close Button Click Event (redirect to main page) ===
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "../index.html"; // Changed from "/" to "../index.html"
    });
  });

  // === Thumbnail Click Event ===
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      const currentModal = thumbnail.closest(".modal");
      currentModal
        .querySelectorAll(".thumbnail")
        .forEach((thumb) => thumb.classList.remove("active"));

      thumbnail.classList.add("active");
      currentModal.querySelector(".main-image").src = thumbnail.src;
    });
  });

  // === Arrow Navigation (Previous) ===
  prevArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const currentModal = arrow.closest(".modal");
      const thumbnails = currentModal.querySelectorAll(".thumbnail");
      const activeIndex = Array.from(thumbnails).findIndex((thumb) =>
        thumb.classList.contains("active")
      );

      // === Loop Backward (If first image, go to last) ===
      const newIndex =
        activeIndex === 0 ? thumbnails.length - 1 : activeIndex - 1;

      thumbnails[activeIndex].classList.remove("active");
      thumbnails[newIndex].classList.add("active");
      currentModal.querySelector(".main-image").src = thumbnails[newIndex].src;
    });
  });

  // === Arrow Navigation (Next) ===
  nextArrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const currentModal = arrow.closest(".modal");
      const thumbnails = currentModal.querySelectorAll(".thumbnail");
      const activeIndex = Array.from(thumbnails).findIndex((thumb) =>
        thumb.classList.contains("active")
      );

      // === Loop Forward (If last image, go to first) ===
      const newIndex =
        activeIndex === thumbnails.length - 1 ? 0 : activeIndex + 1;

      thumbnails[activeIndex].classList.remove("active");
      thumbnails[newIndex].classList.add("active");
      currentModal.querySelector(".main-image").src = thumbnails[newIndex].src;
    });
  });
});
