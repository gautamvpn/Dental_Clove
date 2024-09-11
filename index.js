document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 3, // Show 3 slides at a time (adjust as needed)
      spaceBetween: 20, // Space between slides (adjust as needed)
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

// Toggle dropdown menu on mobile
document.getElementById("toggle-button").addEventListener("click", function () {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});


// Toggle the Treatments dropdown in the mobile menu
const mobileDropdown = document.querySelector(".mobile-dropdown > a");

mobileDropdown.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior of the link
    const dropdownMenu = this.parentElement.querySelector(".mobile-dropdown-menu");
    dropdownMenu.style.display = dropdownMenu.style.display === "grid" ? "none" : "grid";
});

// Get the button and form elements
const bookAppointmentBtn = document.getElementById("book-appointment-btn");
const appointmentForm = document.getElementById("appointment-form");

// Add an event listener to toggle the form's visibility
bookAppointmentBtn.addEventListener("click", function () {
  if (appointmentForm.style.display === "block") {
    appointmentForm.style.display = "none";
  } else {
    appointmentForm.style.display = "block";
  }
});