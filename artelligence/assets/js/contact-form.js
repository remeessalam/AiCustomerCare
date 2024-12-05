document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Gather form data
  const formData = new FormData();
  formData.append("fname", document.getElementById("fname").value);
  formData.append("email", document.getElementById("email").value);
  formData.append("phone", document.getElementById("phone").value);
  formData.append("msg", document.getElementById("msg").value);

  // Prepare fetch options
  const options = {
    method: "POST",
    body: formData,
  };

  // Make the request
  fetch("contact.php", options)
    .then((response) => response.json())
    .then((data) => {
      // Handle success or error messages
      const responseMessage = document.getElementById("responseMessage");
      if (data.status === "Success") {
        responseMessage.innerHTML = `<p>Congrats ${data.msg}</p>`;
        responseMessage.style.color = "green";
      } else {
        responseMessage.innerHTML = `<p>${data.msg}</p>`;
        responseMessage.style.color = "red";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
