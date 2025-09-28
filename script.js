// Typing Effect
const typingElement = document.getElementById("typing");
const textArray = ["Front-End Developer", "Web Designer", "Tech Enthusiast"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[textIndex].length) {
    typingElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.classList.replace("bx-moon", "bx-sun");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    toggleBtn.classList.replace("bx-moon", "bx-sun");
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.classList.replace("bx-sun", "bx-moon");
    localStorage.setItem("theme", "light");
  }
});
