const elemLabel = document.querySelectorAll(".form__label");
const elemInput = document.querySelectorAll(".form__input");

elemInput.forEach((input) => {
  input.addEventListener("focus", (e) => {
    elemLabel.forEach((label) => {
      if (label.classList.contains("position")) {
        label.classList.remove("position");
      }
      label.classList.add("position");
    });
  });
});

elemInput.forEach((input) => {
  input.addEventListener("blur", () => {
    elemLabel.forEach((label) => {
      label.classList.remove("position");
    });
  });
});
