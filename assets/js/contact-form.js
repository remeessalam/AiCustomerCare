document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    try {
      const response = await fetch("https://yourbackendurl1234.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        alert("Your form has been submitted successfully!");
        this.reset();
      } else {
        this.reset();
        const errorData = await response.json();
        alert(`Failed to submit: ${errorData.message}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  });
