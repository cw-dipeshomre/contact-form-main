const form = document.querySelector(".contact");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const fields = form.querySelectorAll(
    "input[type='text'], input[type='email'], textarea"
  );

  fields.forEach((field) => {
    const error = field.parentElement.querySelector(".error");

    if (field.value.trim() === "") {
      if (field.type === "email") {
        error.textContent = "Enter a valid email address";
      } else {
        error.textContent = "This field is required";
      }
      isValid = false;
    } else {
      error.textContent = "";
    }
  });

  const radios = form.querySelectorAll("input[name='Query']");
  const radioError = document.querySelector(".Querytype .error");

  const radioChecked = [...radios].some((radio) => radio.checked);

  if (!radioChecked) {
    radioError.textContent = "Please select a query type";
    isValid = false;
  } else {
    radioError.textContent = "";
  }

  const consent = document.getElementById("consent");
  const consentError = consent.parentElement.querySelector(".error");

  if (!consent.checked) {
    consentError.textContent = "Consent is required";
    isValid = false;
  } else {
    consentError.textContent = "";
  }

  const successMessage = document.getElementById("successMessage");

  if (isValid) {
    successMessage.style.display = "block"; 
    form.reset(); 

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }

});
