//Logica y algoritmos
//dirección, estado civil, cedula, celular, correo, salario
//Ingles

let userName = "";
let age = "";
let address = "";
let civilStatus = "";
let id = "";
let cellphoneNumber = "";
let email = "";
let salary = "";

function registerData() {
  userName = prompt("Ingresa tu nombre");
  age = prompt("Ingresa tu edad");
  address = prompt("Ingresa tu dirección");
  civilStatus = prompt("Ingresa tu estado civil");
  id = prompt("Ingresa tu número de documento de identidad");
  cellphoneNumber = "Ingresa tu número celular";
  email = "Ingresa tu correo";
  salary = prompt("Ingresa tu salario");
}

function showData() {
  alert(
    " Tu nombre es: " +
      userName +
      " tu edad es: " +
      age +
      " tu direccón es:   " +
      address +
      " Tu estado civil es:   " +
      civilStatus +
      " tu número de documento de identidad es:   " +
      id +
      " Tu número celular es:   " +
      cellphoneNumber +
      " tu correo es:   " +
      email +
      " y tu salario es:   " +
      salary
  );
}
