// Change button text on click
document.getElementById("changeBtn").addEventListener("click", () => {
    document.getElementById("changeBtn").textContent = "You clicked me!";
  });
  
  // Show keypress
  document.getElementById("keyInput").addEventListener("keyup", (e) => {
    document.getElementById("keyOutput").textContent = `You pressed: ${e.key}`;
  });
  
  // Image gallery logic
  let imageIndex = 0;
  const images = [
    "https://via.placeholder.com/150/0000FF",
    "https://via.placeholder.com/150/FF0000",
    "https://via.placeholder.com/150/00FF00"
  ];
  
  function nextImage() {
    imageIndex = (imageIndex + 1) % images.length;
    document.getElementById("galleryImg").src = images[imageIndex];
  }
  
  // Form validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedback");
  
    if (!email.includes("@") || password.length < 8) {
      feedback.textContent = "Please enter a valid email and password (8+ characters).";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Sign up successful!";
      feedback.style.color = "green";
    }
  });
  