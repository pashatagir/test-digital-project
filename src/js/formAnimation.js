const inputElements = document.querySelectorAll('.form__input');
const associatedLabel = e => document.querySelector(`[for="${e.target.id}"]`);

inputElements.forEach(input => {
  input.addEventListener('focus', e => {
    if (associatedLabel(e)) {
      associatedLabel(e).classList.add('position');
    }
  });

  input.addEventListener('blur', e => {
    if (input.value !== '') {
      return;
    }

    if (associatedLabel(e)) {
      associatedLabel(e).classList.remove('position');
    }
  });
});
