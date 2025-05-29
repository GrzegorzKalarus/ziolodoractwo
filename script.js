
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form");
  const emailInput = document.querySelector("input[type='email']");
  const nameInput = document.querySelector("input[name='name']");
  const messageInput = document.querySelector("textarea");

  form.addEventListener("submit", (event) => {
    // Walidacja e-mail
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    if (!emailValid || !nameInput.value.trim() || !messageInput.value.trim()) {
      alert("Upewnij się, że wszystkie pola są poprawnie wypełnione.");
      event.preventDefault();
      return;
    }

    // Czyści formularz po krótkim czasie (jeśli nie został zatrzymany)
    setTimeout(() => {
      form.reset();
    }, 100);
  });

  // Efekt przejścia strony
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 0.8s ease";
    document.body.style.opacity = 1;
  }, 100);
});
