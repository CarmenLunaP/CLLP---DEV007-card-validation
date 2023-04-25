import validator from './validator.js';
const boton = document.getElementById("cardValidation")
boton.addEventListener("click", () => {
  const input = document.getElementById("cardNumber").value
  const valido = validator.isValid(input);
  if (input === '') {
    return alert("Ingrese el número de su tarjeta")
  }
  const maskNumber = validator.maskify(input);
  document.getElementById("cardNumber").value = maskNumber
  if (valido === true) {
    alert("Your credit card is valid. You can continue with your purchase!");
  } else {
    alert("Your credit card is not valid. Try again, please");
  }

})
