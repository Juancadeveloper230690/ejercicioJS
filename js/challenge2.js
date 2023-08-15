let department = prompt("Ingrese un departamento");
let visitReason = prompt("motivo visita");

if (department === "" || department === null || visitReason === "" || visitReason === null) {
  alert("datos no validos");
} else {
  department = department.toLowerCase();
  visitReason = visitReason.toLowerCase();
  }
  if (
    department === null ||
    department === "" ||
    visitReason  === null ||
    visitReason  === ""
  ) {
    alert("Datos no validos");
  } else {
    department = department.toLowerCase();
    visitReason  = visitReason .toLowerCase();
  
    if (department === "antioquia" && visitReason  === "turismo") {
      alert("Un sitio turístico en Antioquia es: Pueblito paisa.");
    } else {
      if (department === "antioquia" && visitReason  === "comida") {
        alert("La comida típica de Antioquia es la bandeja paisa.");
      } else {
        if (department === "antioquia" && visitReason  === "museos") {
          alert(
            "Un museo para visitar en Antioquia es el museo de arte moderno en Medellín."
          );
        } else {
          if (department === "cundinamarca" && visitReason  === "turismo") {
            alert(
              "Un sitio turístico en Cundinamarca es la catedral de sal ubicada en Zipaquirá."
            );
          } else {
            if (department === "cundinamarca" && visitReason  === "comida") {
              alert("La comida típica en Cundinamarca es el ajiaco");
            } else {
              if (department === "cundinamarca" && visitReason  === "museos") {
                alert(
                  "Uno de los mejores museos en Cundinamarca es el museo del oro."
                );
              } else {
                if (
                  department === "quindio" ||
                  (department === "quindío" && visitReason  === "turismo")
                ) {
                  alert(
                    "Uno de los mejores sitios turísticos en el Quindío es el parque del cafe."
                  );
                } else {
                  if (
                    department === "quindio" ||
                    (department === "quindío" && visitReason  === "comida")
                  ) {
                    alert(
                      "La plato gastronómico de la región del Quindío es el mondongo."
                    );
                  } else {
                    if (
                      department === "quindio" ||
                      (department === "quindío" && visitReason  === "museos")
                    ) {
                      alert(
                        "Un museo para visitar en el Quindío es el del oro Quimbaya"
                      );
                    } else {
                      if (department === "valle" && visitReason  === "turismo") {
                        alert(
                          "Un sitio para visitar en el Valle es el zoológico de Cali."
                        );
                      } else {
                        if (department === "valle" && visitReason  === "comida") {
                          alert(
                            "Algunas comidas típicas del Valle son el aborrajado y la lulada"
                          );
                        } else {
                          if (department === "valle" && visitReason  === "museos") {
                            alert(
                              "Un museo para visitar en el valle es el museo arqueológico La Merced"
                            );
                          } else {
                            alert(
                              "Elija correctamente departamento y objetivo de su visita"
                            );
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
  

