const password = "ucasal123";

const loginButton = document.getElementById("loginButton");
const passwordInput = document.getElementById("password");
const feriadoInfo = document.getElementById("feriadoInfo");
const motivo = document.getElementById("motivo");
const fecha = document.getElementById("fecha");

loginButton.addEventListener("click", () => {
  const enteredPassword = passwordInput.value;
  if (enteredPassword === password) {
    feriadoInfo.style.display = "block";
    passwordInput.value = "";
    mostrarProximoFeriado();
  } else {
    alert("Contraseña incorrecta");
  }
});

function mostrarProximoFeriado() {
  fetch("https://nolaborables.com.ar/api/v2/feriados/2023")
    .then((response) => response.json())
    .then((data) => {
      const proximoFeriado = data[0];
      motivo.textContent = `Motivo: ${proximoFeriado.motivo}`;
      fecha.textContent = `Fecha: ${proximoFeriado.fecha}`;
    })
    .catch((error) => {
      console.error(error);
    });
}