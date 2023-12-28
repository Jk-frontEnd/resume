document.addEventListener("DOMContentLoaded", function () {
      const content = document.querySelector(".content");

      // Function to add class when user scrolls
      function addClassOnScroll() {
        if (window.scrollY > 100) {
          content.classList.add("menu__scroll");
        } else {
          content.classList.remove("menu__scroll");
        }
      }

      // Attach the function to the scroll event
      window.addEventListener("scroll", addClassOnScroll);
    });