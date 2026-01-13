const form = document.querySelector(".contact");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let isValid = true;
  const fields = form.querySelectorAll(
    "input[type='text'],input[type='email'],textarea"
  );
  fields.forEach((field) => {
    const error = field.parentElement.querySelector(".error");
    if (field.value.trim() === "") {
      error.textContent = "This field is required";
      isValid = false;
    } else {
      let regex = "";
     if (field.name === "first-name" || field.name === "last-name") {
        {
          regex = /^[a-zA-Z\s]+$/;
        }
        if(regex!=="" && !regex.test(field.value.trim())){
            error.textContent = "Please enter a valid " + field.name;
            isValid = false;
        }
        else{
            error.textContent = "";
        }
      }
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
    successMessage.style.opacity = "1";
    document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
    form.reset();
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }
});
