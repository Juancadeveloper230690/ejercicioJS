let department = prompt("Ingrese un departamento");
let visitReason = prompt("Ingrese un motivo de la visita");

if (
  department === "" || department === null && visitReason === "" || visitReason === null)
 {
  alert("Opciones invalidas");
} else {
    department = department.toLowerCase();
    visitReason = visitReason.toLowerCase();
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
  department === "vichada" && visitReason !== "comidas" ||
  visitReason !== "turismo" ||
  visitReason !== "museos"
) {
  alert("Opciones invalidas");
} else {
  if (
    department === "cundinamarca" &&
    department !== "quindio" &&
    department !== "quindío" &&
    department !== "antioquia" &&
    department !== "valle" &&
    visitReason === "comidas"
  ) {
    alert(
      "Las comidas mas populares en Cundinamarca son: Ajiaco, Garullas y fritanga"
    );
  } else {
    if (
      department === "cundinamarca" &&
      department !== "quindio" &&
      department !== "quindío" &&
      department !== "antioquia" &&
      department !== "valle" &&
      visitReason === "turismo"
    ) {
      alert(
        "Los sitios turisticos mas populares de Cundinamarca son son:La Catedral de Sal, Fundación Parque Jaime Duque y Parque Nacional Chicaque"
      );
    } else {
      if (
        department === "cundinamarca" &&
        department !== "quindio" &&
        department !== "quindío" &&
        department !== "antioquia" &&
        department !== "valle" &&
        visitReason === "museos"
      ) {
        alert(
          "Los museos mas populares de Cundinamarca son: Casa Museo Salto de Tequendama, Museo Aeroespacial Fuerza Aerea Colombiana y Museo Indigena"
        );
      } else {
        if (
          department === "quindio" ||
          department === "quindío" &&
            department != "Cundinamarca" &&
            department !== "antioquia" &&
            department !== "valle" &&
            visitReason === "comidas")
         {
          alert(
            "Las comidas mas populares de Quindío son: Sirope, Agua de Panela y trucha"
          );
        } else {
          if (
            department === "quindio" ||
            department === "quindío" &&
              department != "Cundinamarca" &&
              department !== "antioquia" &&
              department !== "valle" &&
              visitReason === "turismo")
           {
            alert(
              "Los sitios turisticos mas populares de Quindío son: Parque del Cafe, Valle del Cocora y Panaca"
            );
          } else {
            if (department === "quindio" ||
            department === "quindío" &&
              department != "Cundinamarca" &&
              department !== "antioquia" &&
              department !== "valle" &&
              visitReason === "museos") {
                alert(
                    "Los museos mas populares de Quindío son: Museo del Disco y La Música, y Museo del Arte del Quindío MAQUI"
                  ); 
            } else {
                if (department === "antioquia" &&
                  department != "Cundinamarca" &&
                  department !== "antioquia" &&
                  department !== "valle" && department !== "quindio" && department !== "quindío" &&
                  visitReason === "comidas") {
                    alert(
                        "Las comidas mas populares de antioquia son: Bandeja paisa, mazamorra paisa y frijoles antioqueños"
                      ); 
                } else {
                    if (department === "antioquia" &&
                    department != "Cundinamarca" &&
                    department !== "antioquia" &&
                    department !== "valle" && department !== "quindio" && department !== "quindío" &&
                    visitReason === "turismo") {
                        alert(
                            "los sitios turisticos mas populares de antioquia son: Museo de Antioquia, Cerro Nutibara y Parque explorar"
                          ); 
                    } else {
                        if (department === "antioquia" &&
                        department != "Cundinamarca" &&
                        department !== "antioquia" &&
                        department !== "valle" && department !== "quindio" && department !== "quindío" &&
                        visitReason === "museos") {
                            alert(
                                "Los museos mas populares de Antioquia son: Museo de Antioquia, Museo del Agua EPM y Museo de la Casa de la Memoria")  
                        } else {
                            if (department === "valle" &&
                            department != "Cundinamarca" &&
                            department !== "antioquia" && department !== "quindio" && department !== "quindío" &&
                            visitReason === "comidas") {
                                alert(
                                    "Las comidas mas populares del Valle son: Arroz atollado, lulada y champús")
                            } else {
                                if (department === "valle" &&
                                department != "Cundinamarca" &&
                                department !== "antioquia" && department !== "quindio" && department !== "quindío" &&
                                visitReason === "turismo") {
                                    alert(
                                        "Los sitios turisticos mas populares de Valle son: Basílica Menor Señor de los Milagros, Zoológico de Cali y Monumento Cristo Rey")
                                } else {
                                    if (department === "valle" &&
                                    department != "Cundinamarca" &&
                                    department !== "antioquia" && department !== "quindio" && department !== "quindío" &&
                                    visitReason === "museos") {
                                        alert(
                                            "Los museos mas populares de Valle son: Museo arqueológico La Merced, Museo del Oro Calima del Banco de la República y Museo Aéreo Fenix")
                                    }
                                }
                            }
                        }
                    }
                    
                }
                
            }
          }
        }
      }
    }
  }
}
}
