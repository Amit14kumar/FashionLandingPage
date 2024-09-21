document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      alert('Item added to cart!');
    });
  });

const sidebar = document.getElementById("sidebar");
const toggleBtnHam = document.querySelector(".toggle-btn-ham");
const toggleBtnClose = document.querySelector(".toggle-btn-close");
// const mainContent = document.querySelector(".main-content");

toggleBtnHam.addEventListener("click", () => {
    // Toggle sidebar visibility
    console.log("Toggle Sidebar");
    sidebar.classList.toggle("open");
    // Shift main content only on larger screens
    if (window.innerWidth > 768) {
        mainContent.classList.toggle("shift");
    }
});

toggleBtnClose.addEventListener("click", () => {
    // Toggle sidebar visibility
    console.log("Toggle Sidebar");
    sidebar.classList.toggle("open");
    // Shift main content only on larger screens
    if (window.innerWidth > 768) {
        mainContent.classList.toggle("shift");
    }
});

