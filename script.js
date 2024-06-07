function calcular() {
    var opcion = document.getElementById("opcion").value;
    var masaSoluto = parseFloat(document.getElementById("masa-soluto").value);
    var volumenSolucion = parseFloat(document.getElementById("volumen-solucion").value);
    var densidadSolucion = parseFloat(document.getElementById("densidad-solucion").value);
    var masaMolarSoluto = parseFloat(document.getElementById("masa-molar-soluto").value);
  
    var resultado;
  
    switch (opcion) {
      case "1":
        // Porcentaje m/m (Porcentaje masa/masa)
        var masaTotalSolucion = volumenSolucion * densidadSolucion;
        resultado = (masaSoluto / masaTotalSolucion) * 100;
        break;
      case "2":
        // % m/v (Porcentaje masa/volumen)
        resultado = (masaSoluto / volumenSolucion) * 100;
        break;
      case "3":
        // % v/v (Porcentaje volumen/volumen) (No es posible calcular con estos datos)
        resultado = "No se puede calcular el porcentaje volumen/volumen con los datos proporcionados.";
        break;
      case "4":
        // ppm (Partes por millón) (No es posible calcular con estos datos)
        resultado = "No se puede calcular las partes por millón con los datos proporcionados.";
        break;
      case "5":
        // ppb (Partes por billón) (No es posible calcular con estos datos)
        resultado = "No se puede calcular las partes por billón con los datos proporcionados.";
        break;
      case "6":
        // Molaridad (M) (No es posible calcular con estos datos)
        resultado = "No se puede calcular la molaridad con los datos proporcionados.";
        break;
      case "7":
        // Normalidad (N) (No es posible calcular con estos datos)
        resultado = "No se puede calcular la normalidad con los datos proporcionados.";
        break;
      case "8":
        // Fracción molar (X) (No es posible calcular con estos datos)
        resultado = "No se puede calcular la fracción molar con los datos proporcionados.";
        break;
      default:
        resultado = "Por favor, seleccione una opción válida.";
    }
  
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado.toFixed(2) + "%";
  }
  
  

