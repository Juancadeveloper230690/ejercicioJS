//Ejercicio de Lógica
const day = prompt("Ingrese día");

if (day === "" || day === null) {
  alert("Opción invalida");
} else {
  day = day.toLowerCase();
  if (
    day === "lunes" ||
    day === "martes" ||
    day === "miercoles" ||
    day === "miércoles" ||
    day === "jueves" ||
    day === "viernes"
  ) {
    alert("Es un día entre semana");
  } else {
    //if anidados
    if (day === "sabado" || day === "sábado" || day === "domingo") {
      alert("Es un fin de semana");
    } else {
      alert("Favor ingresar solo días de la semana");
    }
  }
}

/**
 * NOTAS:
 * 1 - Mayusculas
 * 2 - Palabras que no son días
 * 3- Vacio
 * 4 - Null
 * 5 - Tildes
 */
