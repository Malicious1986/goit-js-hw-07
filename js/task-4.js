const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { password, email } = form.elements;

  if (!password || !email) {
    alert("All form fields must be filled in");
  }

  const formData = {
    password: password.value.trim(),
    email: email.value.trim(),
  };

  form.reset();

  console.log(formData);
});
