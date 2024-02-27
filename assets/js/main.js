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
//Search Box

document.addEventListener("DOMContentLoaded", function () {
  const serviceInput = document.getElementById("service");
  const cityInput = document.getElementById("city");

  const searchForm = document.getElementById("searchForm");
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let selectedService = serviceInput.value.toLowerCase(); // Convert to lowercase
    let selectedCity = cityInput.value.toLowerCase().replace(/\s+/g, "-"); // Convert to lowercase and replace spaces with hyphens
    if (selectedService && selectedCity) {
      const baseUrl = window.location.origin;
      window.location.href = `${baseUrl}/${selectedService}/${selectedCity}`;
    } else {
      alert("Please select both a service and a city.");
    }
  });

  // Fetch and populate service and city lists from JSON
  fetch("/assets/search.json")
    .then((response) => response.json())
    .then((data) => {
      const services = new Set();
      const cities = new Set();

      // Extract services and cities
      for (const city in data) {
        data[city].services.forEach((service) =>
          services.add(service.toLowerCase())
        ); // Convert service names to lowercase
        cities.add(data[city].city_name);
      }

      // Populate service datalist
      const serviceList = document.getElementById("serviceList");
      services.forEach((service) => {
        const option = document.createElement("option");
        option.value = service;
        serviceList.appendChild(option);
      });

      // Populate city datalist
      const cityList = document.getElementById("cityList");
      cities.forEach((city) => {
        const option = document.createElement("option");
        option.value = city;
        cityList.appendChild(option);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
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
      spaceBetween: 2,
    },
    480: {
      slidesPerView: 6,
      spaceBetween: 3,
    },
    640: {
      slidesPerView: 8,
      spaceBetween: 5,
    },
    992: {
      slidesPerView: 10,
      spaceBetween: 0,
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
