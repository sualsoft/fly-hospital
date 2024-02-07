document.addEventListener("DOMContentLoaded", function () {
  var toggleButtons = document.querySelectorAll(".toggle");
  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var sidebar = document.querySelector(".sidebar");
      if (sidebar.classList.contains("display-none")) {
        sidebar.classList.remove("display-none");
      } else {
        sidebar.classList.add("display");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var toggleButtons = document.querySelectorAll(".xx");
  toggleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var sidebar = document.querySelector(".sidebar");
      if (sidebar.classList.contains("display")) {
        sidebar.classList.remove("display");
      } else {
        sidebar.classList.add("display-none");
      }
    });
  });
});

//slide

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".carousel-container");
  const logos = document.querySelectorAll(".logo");
  const logoWidth = logos[0].offsetWidth + 10; // including margin-right
  const logoCount = logos.length;
  const carouselWidth = logoWidth * logoCount;
  let currentIndex = 0;

  // Clone the logos to create a seamless loop
  logos.forEach((logo, index) => {
    const clone = logo.cloneNode(true);
    container.appendChild(clone);
  });

  // Set the width of the container to fit all logos
  container.style.width = carouselWidth + "px";

  function slide(direction) {
    if (direction === "next") {
      currentIndex++;
    } else {
      currentIndex--;
    }

    const offset = -currentIndex * logoWidth;
    container.style.transform = `translateX(${offset}px)`;

    // Reset index to 0 when reaching the end
    if (currentIndex >= logoCount) {
      currentIndex = 0;
      container.style.transition = "none";
      container.style.transform = `translateX(0)`;
      setTimeout(() => {
        container.style.transition = "";
      }, 10);
    }

    // Loop to the last logo when going backwards from the beginning
    if (currentIndex < 0) {
      currentIndex = logoCount - 1;
      const endOffset = -currentIndex * logoWidth;
      container.style.transition = "none";
      container.style.transform = `translateX(${-carouselWidth + endOffset}px)`;
      setTimeout(() => {
        container.style.transition = "";
      }, 10);
    }
  }

  // Auto slide every 2 seconds
  setInterval(function () {
    slide("next");
  }, 2000);

  // Add event listeners for previous and next buttons
  document.getElementById("prevBtn").addEventListener("click", function () {
    slide("prev");
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    slide("next");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");
  questions.forEach((question) => {
    question.addEventListener("click", function () {
      questions.forEach((otherQuestion) => {
        if (otherQuestion !== question) {
          otherQuestion.classList.remove("active");
        }
      });
      question.classList.toggle("active");
    });
  });
});
