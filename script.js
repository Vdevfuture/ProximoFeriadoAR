import { obtenerJson, calcularProximoFeriado } from "https://cdn.esjs.dev/KYDwDg9gTgLghlABAMwK4DsDGBLC7GZwA2mqRCAClBCNgLYQBiwU2cAJhABTItucBnAJSIA3gChEBPAJwI4AC2hxEAXgJRgCRM0wK4XIZOnpZ8gI8QAgphipia+UqhwAdBABGMYOhZXLhsaYMnLsbDZ2DuqKyu5ePiwAImyBUsGmcnTAAhH2RI4xLnHevlAAstmGiADUiACMxpow0OjavKwcEAKuyNjo7FzGUjx8nSKqAHxDUogjHZyuWQJqqupLuQ4AZJsoowthKhOIBxtEIgA+59NS7fwQi9mIR+u2ecZGAL5AA";

const password = "ucasal123"; // password

const obtenerFeriados = async (year) => {
  const url = `https://nolaborables.com.ar/api/v2/feriados/${year}`;
  try {
    const feriados = await obtenerJson(url);
    return feriados;
  } catch (error) {
    throw error;
  }
};

const mostrarProximoFeriado = async () => {
  try {
    const year = 2023; // Change the year as needed
    const feriados = await obtenerFeriados(year);

    // Request password
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", () => {
      const enteredPassword = passwordInput.value.trim();
      if (enteredPassword === password) {
        const proximoFeriado = calcularProximoFeriado(feriados);

        // Show the next holiday
        document.getElementById("motivo").textContent = `Holiday: ${proximoFeriado.motivo}`;
        document.getElementById("fecha").textContent = `Date: ${proximoFeriado.dia}/${proximoFeriado.mes}`;
        document.getElementById("feriadoInfo").style.display = "block";

        // Hide the login form
        document.getElementById("loginForm").style.display = "none";
      } else {
        alert("Incorrect password. You cannot view the information.");
      }
    });
  } catch (error) {
    console.error("Error fetching the next holiday:", error);
  }
};

// Call the function to show the next holiday
mostrarProximoFeriado();
