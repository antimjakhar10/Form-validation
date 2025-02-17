document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("formMessage").textContent = "";

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    let isValid = true;

    // Validate name
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
      } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        isValid = false;
      }

      // Validate password
      if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required.";
        isValid = false;
      } else if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
        isValid = false;
      }

      // If valid, show success message
      if (isValid) {
        document.getElementById("formMessage").textContent = "Form submitted successfully!";
        console.log({ name, email, password }); // For demonstration purposes
      }
    });