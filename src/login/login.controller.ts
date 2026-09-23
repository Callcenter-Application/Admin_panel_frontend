export function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password') as HTMLInputElement;
  const passwordIcon = document.getElementById('password-icon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    if (passwordIcon) passwordIcon.textContent = 'visibility_off';
  } else {
    passwordInput.type = 'password';
    if (passwordIcon) passwordIcon.textContent = 'visibility';
  }
}

export function handleFormSubmit() {
  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement;
  const banner = document.getElementById('alert-banner');

  // Feedback button transition
  submitBtn.disabled = true;
  submitBtn.classList.add('opacity-75');
  submitBtn.innerHTML = `
        <span class="material-symbols-outlined animate-spin text-lg" data-icon="progress_activity">progress_activity</span>
        <span>Autenticando en FastAPI...</span>
      `;

  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.classList.remove('opacity-75');
    submitBtn.innerHTML = `
          <span>Iniciar sesión</span>
          <span class="material-symbols-outlined text-lg" data-icon="arrow_forward">arrow_forward</span>
        `;
    // Toggle sample contextual banner to verify behavior
    banner?.classList.remove('hidden');
  }, 1000);
}