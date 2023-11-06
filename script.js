import { obtenerJson, calcularProximoFeriado } from "https://cdn.esjs.dev/KYDwDg9gTgLghlABAMwK4DsDGBLC7GZwA2mqRCAClBCNgLYQBiwU2cAJhABTItucBnAJSIA3gChEBPAJiI4AC2hxEAXgJRgCRM0wK4XIZOnpZ8gI8QAgphipia+UqhwAdBABGMYOhZXLhsaYMnLsbDZ2DuqKyu5ePiwAImyBUsGmcnTAAhH2RI4xLnHevlAAstmGiADUiACMxpow0OjavKwcEAKuyNjo7FzGUjx8nSKqAHxDUogjHZyuWQJqqupLuQ4AZJsoowthKhOIBxtEIgA+59NS7fwQi9mIR+u2ecZGAL5AA";

const password = "ucasal123"; 

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
    const year = 2023; 
    const feriados = await obtenerFeriados(year);

    // Solicitar contraseña
    const contraseña = prompt("Ingresa tu contraseña:");
    if (contraseña === password) {
      const proximoFeriado = calcularProximoFeriado(feriados);
      console.log("Próximo Feriado:", proximoFeriado);
    } else {
      alert("Contraseña incorrecta. No puedes ver la información.");
    }
  } catch (error) {
    console.error("Error al obtener el próximo feriado:", error);
  }
};


mostrarProximoFeriado();
