var url = 'http://airemad.com/api/v1/pollen';
var title = document.getElementById('mainTitle');
title.textContent = 'Datos del Polen de Madrid Starter';
var contenedor = document.querySelector('.container');

function getDatos(url) {
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      var datos = JSON.parse(xmlHttp.responseText);
      processResponse(datos);
    } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
      console.error('ERROR! 404');
      console.info(JSON.parse(xmlHttp.responseText));
    }
  };
  xmlHttp.open('GET', url, true);
  xmlHttp.send();
}

function processResponse(datos) {
  var template = '';

  for (var i = 0; i < datos.length; i++) {
    var station = datos[i];
    var stationName = station.name;
    var parametros = station.parametros;
    var mediciones = station.mediciones;
    var paramsArray = Object.keys(station.parametros);
    var medicionesArray = Object.keys(station.mediciones);
    template +=
      '<h3 class="subTitle">' + stationName + '</h3><div class="values">';

    for (var j = 0; j < paramsArray.length; j++) {
      var paramName = paramsArray[j];
      var medio = parametros[paramName].medio;
      var alto = parametros[paramName].alto;
      var muyAlto = parametros[paramName].muy_alto;
      var medicionName;
      var fecha;
      var valor;
      var resumen;

      for (var k = 0; k < medicionesArray.length; k++) {
        medicionName = medicionesArray[k];
        fecha = mediciones[medicionName].fecha.slice(0, -1);
        fecha = new Date(fecha).toDateString();
        valor = mediciones[medicionName].valor;
        resumen = mediciones[medicionName].resumen;

        console.log('fecha**********', fecha);
      }

      template +=
        '<div class="card"><h4>' +
        paramName +
        '</h4><p>Nivel medio: ' +
        medio +
        '</p><p>Nivel alto: ' +
        alto +
        '</p><p>Nivel muy alto: ' +
        muyAlto +
        '</p><p>Fecha: ' +
        fecha +
        '</p><p>Valor: ' +
        valor +
        '</p><p>Resumen: ' +
        resumen +
        '</p></div>';
    }
    template += '</div>';
  }

  contenedor.innerHTML = template;
}

getDatos(url);
