document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    let formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    formObject = {
      body: { ...formObject },
      to: "",
      subject: "You have a new message from AI CUSTOMER CARE",
    };

    try {
      const response = await fetch(
        "https://smtp-api-tawny.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formObject),
        }
      );

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
