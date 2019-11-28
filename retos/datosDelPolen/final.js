'use strict';

const url = 'http://airemad.com/api/v1/pollen';
var title = document.getElementById('mainTitle');
title.textContent = 'Datos del Polen de Madrid Final';
const contenedor = document.querySelector('.container');

/* Petición http de los datos del polen */
const getDatos = url => {
  fetch(url)
    .then(response => response.json())
    .then(datos => processResponse(datos))
    .catch(error => console.log(error));
};

/* Crea un array de objetos nuevos combinando los datos de parametros y mediciones */
const processResponse = datos => {
  const datosFinales = datos.reduce((acc, currItem) => {
    let templateText = {};
    templateText.name = currItem.name;
    let valores = { ...currItem.parametros };
    let mediciones = { ...currItem.mediciones };

    for (let med in mediciones) {
      if (valores.hasOwnProperty(med)) {
        valores[med] = {
          ...valores[med],
          fecha: mediciones[med].fecha,
          valor: mediciones[med].valor,
          resumen: mediciones[med].resumen
        };
      }
    }
    templateText.valores = valores;
    acc.push(templateText);

    return acc;
  }, []);
  crearTemplate(datosFinales);
};

/* Crea el template con los datos del polen */
const crearTemplate = datosFinales => {
  const template = datosFinales
    .map(barrio => {
      let nombre = barrio.name;
      let valores = barrio.valores;
      const containerTemplate = `
      <h3 class='subTitle'>${nombre}</h3>
      <div class="values">
      ${getValores(valores)}
      </div>
      `;
      return containerTemplate;
    })
    .join('');
  contenedor.innerHTML = template;
};

/* Extrae los datos del objeto de valores */
const getValores = valores => {
  let valTemplate = Object.keys(valores)
    .map(valor => {
      let fecha = valores[valor].fecha.slice(0, -1);
      fecha = new Date(fecha).toDateString();
      let tableTemplate = `<div class="card">
          <h4>${valor}</h4>
          <p>Nivel medio: ${valores[valor].medio}</p>
          <p>Nivel alto: ${valores[valor].alto}</p>
          <p>Nivel muy alto: ${valores[valor].muy_alto}</p>
          <p>Fecha: ${fecha}</p>
          <p>Valor: ${valores[valor].valor}</p>
          <p>Resumen: ${valores[valor].resumen}</p>
        </div>`;
      return tableTemplate;
    })
    .join('');
  return valTemplate;
};

getDatos(url);
