
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("#nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
});

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function() {

    const name = document.querySelector("#name");
    const email = document.querySelector("#email");

    const nameError = document.querySelector("#nameError");
    const emailError = document.querySelector("#emailError");

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";

    let valid = true;

    if (name.value.trim() === "") {
        nameError.textContent = "Please enter your name";
        nameError.style.color = "red";
        valid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Please enter your email";
        emailError.style.color = "red";
        valid = false;
    }

    if (valid) {
        alert("Thank you! Your message has been submitted.");
        
        name.value = "";
        email.value = "";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slider-track img");
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }, 4000);
});


document.querySelector("#calcBmiBtn").addEventListener("click", function() {
  const h = parseFloat(document.querySelector("#height").value) / 100;
  const w = parseFloat(document.querySelector("#weight").value);
  const result = document.querySelector("#bmiResult");

  if (h > 0 && w > 0) {
    const bmi = (w / (h * h)).toFixed(1);
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";
    
    result.textContent = `Your BMI is ${bmi} (${category})`;
    result.style.color = "#24B1B1";
  } else {
    result.textContent = "Please enter valid numbers.";
    result.style.color = "red";
  }
});