function encriptar() {
  var texto = document.getElementById("textoentrada").value;

  // Validar que no haya mayúsculas, acentos o caracteres especiales
  if (/[^a-z\s]/.test(texto)) {
    alert("Solo ingrese texto en minúsculas y sin acentos");
    return;
  }

  // Convertir a minúsculas después de la validación
  texto = texto.toLowerCase();

  var txtcifrado = texto.replace(/e/gm, "enter")
                        .replace(/o/gm, "ober")
                        .replace(/i/gm, "imes")
                        .replace(/a/gm, "ai")
                        .replace(/u/gm, "ufat");

/*ocultar imagen de fondo y texto donde va el texto encriptado,
mostrar el boton de copiar
mostrar el texto cifrado en el campo de salida*/
  document.getElementById("textosalida").style.backgroundImage = "none";
  document.getElementById("Encriptadorvacio").style.display = "none";
  document.getElementById("textosalida").value = txtcifrado;
  document.getElementById("copiar").hidden= false;
  document.getElementById("textosalida").style.color = "#ff0090";
  document.getElementById("textoentrada").style.color = "#1900ff";
}

function desencriptar() {
  var texto = document.getElementById("textoentrada").value;

  // Validar que no haya mayúsculas, acentos o caracteres especiales
  if (/[^a-z\s]/.test(texto)) {
    alert("Solo ingrese texto en minúsculas y sin acentos");
    return;
  }

  // Verificar si el texto tiene palabras encriptadas
  if (!/enter|ober|imes|ai|ufat/.test(texto)) {
    alert("No se encontro texto para desenpinktar.");
    return;
  }

  var txtcifrado = texto.replace(/enter/gm, "e")
                        .replace(/ober/gm, "o")
                        .replace(/imes/gm, "i")
                        .replace(/ai/gm, "a")
                        .replace(/ufat/gm, "u");

/*ocultar imagen de fondo y texto donde va el texto desencriptado,
mostrar el boton de copiar
mostrar el texto decifrado en el campo de salida*/
  document.getElementById("textosalida").style.backgroundImage = "none";
  document.getElementById("Encriptadorvacio").style.display = "none";
  document.getElementById("textosalida").value = txtcifrado;
  document.getElementById("copiar").hidden= false;
  document.getElementById("textosalida").style.color = "#1900ff";
  document.getElementById("textoentrada").style.color = "#ff0090";

}
/* Copia mensaje y limpia la caja de encriptado/desencriptado para ingresar un nuevo texto */
function copia() {
  var contenido = document.getElementById("textosalida");
  contenido.select();
  document.execCommand('copy');
  document.getElementById("textoentrada").value = "";
  alert("¡Mensaje copiado exitosamente!");
}
