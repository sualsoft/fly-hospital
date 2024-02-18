//Navigation Bar
document.addEventListener("DOMContentLoaded", function () {
  // Toggle sidebar visibility when the toggle button is clicked
  var toggleButton = document.getElementById("toggle");
  toggleButton.addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("visible");
  });

  // Remove sidebar visibility when the close icon is clicked
  var closeIcon = document.querySelector(".icon.xx");
  closeIcon.addEventListener("click", function () {
    var sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("visible");
  });
});

//hide nav
window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

//slide

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

// SLIDE
var swiper = new Swiper(".mySwiper", {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",

  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 4,
    },
    480: {
      slidesPerView: 6,
      spaceBetween: 6,
    },
    640: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 9,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Modal
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
