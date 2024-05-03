const form = document.getElementById('validationForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const resultMessage = document.getElementById('resultMessage');
const passwordStrength = document.getElementById('passwordStrength');
form.addEventListener('submit', function(event) {
event.preventDefault();
emailError.textContent = '';
passwordError.textContent = '';
resultMessage.textContent = '';

if (!isValidEmail(emailInput.value)) {
emailError.textContent = 'Düzgün email formatı daxil edin. Məsələn: example@mail.com';
return;
}
if (passwordInput.value.length < 8) {
passwordError.textContent = 'Parol ən azı 8 simvoldan ibarət olmalıdır.';
return;
}
resultMessage.textContent = 'Form uğurla göndərildi!';
form.reset();
});
passwordInput.addEventListener('input', function() {
  passwordStrength.textContent = `Parol 8-dən böyük olmalıdır: ${passwordInput.value.length}/8`;
});
function isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}