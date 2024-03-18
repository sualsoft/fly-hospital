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
  const serviceSuggestions = document.getElementById("serviceSuggestions");
  const citySuggestions = document.getElementById("citySuggestions");

  // Hide suggestion lists by default
  serviceSuggestions.style.display = "none";
  citySuggestions.style.display = "none";

  // Fetch and populate service and city suggestions from JSON
  fetch("/assets/search.json")
    .then((response) => response.json())
    .then((data) => {
      const servicesSet = new Set();
      const citiesSet = new Set();

      // Extract services and cities
      for (const city in data) {
        data[city].services.forEach((service) =>
          servicesSet.add(service.toLowerCase())
        );
        citiesSet.add(data[city].city_name.toLowerCase());
      }

      const services = Array.from(servicesSet); // Convert set back to array
      const cities = Array.from(citiesSet); // Convert set back to array

      // Function to filter suggestions based on user input
      function filterSuggestions(input, suggestions) {
        const inputValue = input.value.toLowerCase();
        return suggestions.filter((suggestion) =>
          suggestion.toLowerCase().startsWith(inputValue)
        );
      }

      // Function to populate suggestions list
      function populateSuggestions(input, suggestionsList, suggestions) {
        // Clear previous suggestions
        suggestionsList.innerHTML = "";
        // Filter suggestions based on user input
        const filteredSuggestions = filterSuggestions(input, suggestions);
        // Populate filtered suggestions (up to maximum of 5)
        if (filteredSuggestions.length === 0) {
          const listItem = document.createElement("li");
          listItem.textContent = "No matching";
          listItem.classList.add("list-group-item");
          suggestionsList.appendChild(listItem);
        } else {
          for (let i = 0; i < Math.min(filteredSuggestions.length, 5); i++) {
            const listItem = document.createElement("li");
            listItem.textContent = filteredSuggestions[i];
            listItem.classList.add("list-group-item");
            listItem.addEventListener("click", () => {
              input.value = filteredSuggestions[i];
              suggestionsList.style.display = "none"; // Hide suggestions after selecting one
            });
            suggestionsList.appendChild(listItem);
          }
        }
        // Show suggestions list
        suggestionsList.style.display = "block";
      }

      // Event listeners for input fields
      serviceInput.addEventListener("input", () => {
        populateSuggestions(serviceInput, serviceSuggestions, services);
      });

      cityInput.addEventListener("input", () => {
        populateSuggestions(cityInput, citySuggestions, cities);
      });

      // Hide suggestions list when input is empty
      serviceInput.addEventListener("input", () => {
        if (serviceInput.value.trim() === "") {
          serviceSuggestions.style.display = "none";
        }
      });

      cityInput.addEventListener("input", () => {
        if (cityInput.value.trim() === "") {
          citySuggestions.style.display = "none";
        }
      });

      // Form submission event listener
      const searchForm = document.getElementById("searchForm");
      searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const selectedService = serviceInput.value.toLowerCase();
        const selectedCity = cityInput.value.toLowerCase();
        if (!services.includes(selectedService)) {
          alert("Error: Service not found.");
        } else if (!cities.includes(selectedCity)) {
          alert("Error: City not found.");
        } else {
          const baseUrl = window.location.origin;
          window.location.href = `${baseUrl}/${selectedService}/${selectedCity}`;
        }
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
      slidesPerView: 8,
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
