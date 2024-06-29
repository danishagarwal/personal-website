// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

// collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

document
  .getElementById("darkModeToggle")
  .addEventListener("click", function () {
    var body = document.body;
    var cards = document.querySelectorAll(".card");
    var cardBodies = document.querySelectorAll(".card-body");
    var icons = document.querySelectorAll(".fab, .fas");
    var footerIcons = document.querySelectorAll("#footer .fab, #footer .fas");

    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    cards.forEach(function (card) {
      card.classList.toggle("dark-mode");
      card.classList.toggle("light-mode");
    });

    cardBodies.forEach(function (cardBody) {
      cardBody.classList.toggle("dark-mode");
      cardBody.classList.toggle("light-mode");
    });

    icons.forEach(function (icon) {
      icon.classList.toggle("dark-mode");
      icon.classList.toggle("light-mode");
    });

    footerIcons.forEach(function (footerIcon) {
      footerIcon.classList.toggle("dark-mode");
      footerIcon.classList.toggle("light-mode");
    });

    // Change button icon based on the mode
    var isDarkMode = body.classList.contains("dark-mode");
    this.textContent = isDarkMode ? "☀" : "☾";
  });
