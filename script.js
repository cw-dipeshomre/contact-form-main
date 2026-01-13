const form = document.querySelector(".contact");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  // ===== Text, Email & Textarea =====
  const fields = form.querySelectorAll(
    "input[type='text'], input[type='email'], textarea"
  );

  fields.forEach((field) => {
    const error = field.parentElement.querySelector(".error");

    if (field.value.trim() === "") {
      if (field.type === "email") {
        error.textContent = "Please enter a valid email address";
      } else {
        error.textContent = "This field is required";
      }
      isValid = false;
    } else {
      error.textContent = "";
    }
  });

  // ===== Radio buttons =====
  const radios = form.querySelectorAll("input[name='Query']");
  const radioError = document.querySelector(".Querytype .error");

  const radioChecked = Array.from(radios).some((radio) => radio.checked);

  if (!radioChecked) {
    radioError.textContent = "Please select a query type";
    isValid = false;
  } else {
    radioError.textContent = "";
  }

  // ===== Checkbox =====
  const consent = document.getElementById("consent");
  const consentError = consent.closest(".inside").querySelector(".error");

  if (!consent.checked) {
    consentError.textContent = "Consent is required";
    isValid = false;
  } else {
    consentError.textContent = "";
  }

  // ===== Submit if valid =====
  if (isValid) {
    form.submit();
  }
});
