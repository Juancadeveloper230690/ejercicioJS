const name = prompt("Ingrese su nombre");
const age = prompt("Ingrese su edad");
const country = prompt("Ingrese su país").toLowerCase();
const skill = prompt("Ingrese su habilidad").toLowerCase();

if 
  (age >= "18" && country === "colombia" ||
  country === "ecuador" && skill !== "zurda")
{
  alert(" Quedas registrado al cupo de la beca");
} else {
  alert(" No cumples con los requisitos");
}
