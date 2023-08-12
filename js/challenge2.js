let department = prompt("Ingrese un departamento");

if (department === "" || department === null) {
  alert("Opción invalida");
} else {
  department = department.toLowerCase();
  if (
    department === "amazonas" ||
    department === "arauca" ||
    department === "atlántico" ||
    department === "atlantico" ||
    department === "bolivar" ||
    department === "bolívar" ||
    department === "boyaca" ||
    department === "boyacá" ||
    department === "caldas" ||
    department === "caquetá" ||
    department === "caqueta" ||
    department === "casanare" ||
    department === "cauca" ||
    department === "cesar" ||
    department === "chocó" ||
    department === "choco" ||
    department === "cordoba" ||
    department === "córdoba" ||
    department === "guainía" ||
    department === "guainia" ||
    department === "guaviare" ||
    department === "huila" ||
    department === "guajira" ||
    department === "magdalena" ||
    department === "meta" ||
    department === "nariño" ||
    department === "norte de santander" ||
    department === "putumayo" ||
    department === "risaralda" ||
    department === "san andres" ||
    department === "san ándres" ||
    department === "santander" ||
    department === "sucre" ||
    department === "tolima" ||
    department === "vaupés" ||
    department === "vaupes" ||
    department === "vichada"
  ) {
    alert("Opción invalida");
  } else {
    if (
      department === "cundinamarca" &&
      department !== "quindio" &&
      department !== "quindío" &&
      department !== "antioquia" &&
      department !== "valle"
    ) {
      alert("La capital de Cundinamarca es Bogotá");
    } else {
      if(
        department === "quindio" ||
        department === "quindío" &&
          department !== "cundinamarca" &&
          department !== "antioquia" &&
          department !== "valle")
       
        alert("La capital de Quindío es Armenia");
       else {
        if (department === "antioquia" &&
        department !== "quindio" &&
          department !== "quindío" &&
          department !== "cundinamarca" &&
          department !== "valle") {
            alert("La capital de Antioquia es Medellin");
        } else {
          if (department === "valle" &&
          department !== "quindio" &&
            department !== "quindío" &&
            department !== "cundinamarca" &&
            department !== "antioquia") {
              alert("La capital de Valle es Cali");
          } 
            
          }
        }
            
        } 
            
        
      }
    }
  

