//Modal Script

// Get elements
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

// Open modal
openBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

// Close modal when clicking "×"
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
