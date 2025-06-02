var images = document.querySelectorAll(".container1 img");
var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var currentIndex = 0;
var prevIndex = images.length - 1;
var nextIndex = (currentIndex + 1) % images.length;
var isAnimating = false; // Flag to prevent clicking during animation

// Add animation end event listeners to all images
images.forEach((img) => {
  img.addEventListener("animationend", function () {
    // Clear animation when it ends
    this.style.animation = "";
  });
});

// Hide all images initially
images.forEach((img) => {
  img.style.display = "none";
});

// Reset all images to default state
function resetImageStyles() {
  images.forEach((img) => {
    img.style.animation = "";
    img.style.transform = "";
    img.style.opacity = "1";
    img.style.display = "none";
  });
}

// Function to update display of visible images
function updateImageDisplay() {
  // Hide all images first
  images.forEach((img) => {
    img.style.display = "none";
    img.style.animation = "";
  });

  // Show only the three images we need
  images[prevIndex].style.display = "block";
  images[prevIndex].style.transform = "translateX(-140%) scale(0.8)";
  images[prevIndex].style.opacity = "0.5";

  images[currentIndex].style.display = "block";
  images[currentIndex].style.transform = "";
  images[currentIndex].style.opacity = "1";

  images[nextIndex].style.display = "block";
  images[nextIndex].style.transform = "translateX(140%) scale(0.8)";
  images[nextIndex].style.opacity = "0.5";
}

// Setup initial state
resetImageStyles();
updateImageDisplay();

nextButton.addEventListener("click", function () {
  if (isAnimating) return;
  isAnimating = true;

  // Store old indices for animation
  let oldCurrentIndex = currentIndex;
  let oldPrevIndex = prevIndex;

  // Update indices
  currentIndex = (currentIndex + 1) % images.length;
  prevIndex = (currentIndex - 1 + images.length) % images.length;
  nextIndex = (currentIndex + 1) % images.length;

  // Start animations
  images[oldPrevIndex].style.display = "none";
  images[oldCurrentIndex].style.animation = "anim2 1s forwards";

  images[currentIndex].style.display = "block";
  images[currentIndex].style.animation = "anim1 1s forwards";

  setTimeout(function () {
    updateImageDisplay();

    // Reset animation flag after animation completes
    isAnimating = false;
  }, 1000);
});

prevButton.addEventListener("click", function () {
  if (isAnimating) return;
  isAnimating = true;

  // Store old indices for animation
  let oldCurrentIndex = currentIndex;
  let oldNextIndex = nextIndex;

  // Update indices
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  prevIndex = (currentIndex - 1 + images.length) % images.length;
  nextIndex = (currentIndex + 1) % images.length;

  // Start animations
  images[oldNextIndex].style.display = "none";
  images[oldCurrentIndex].style.animation = "anim4 1s forwards";

  images[currentIndex].style.display = "block";
  images[currentIndex].style.animation = "anim3 1s forwards";

  setTimeout(function () {
    updateImageDisplay();

    // Reset animation flag after animation completes
    isAnimating = false;
  }, 1000);
});
