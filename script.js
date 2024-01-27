function validateForm() {
  // Get form inputs
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Simple validation
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  // Email validation using a regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // If all validations pass, you can proceed with form submission
  alert("Form submitted successfully!");
  return true;
}
