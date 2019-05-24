import React from 'react';

export function Encabezado() {

  var nombre = prompt("Ingrese su nombre", "");
  console.log(nombre);
  if(nombre === null || nombre === ""){
    nombre = "Invitado"
  }

  return (<div className="Header">
    <h1>Bienvenido '{nombre}' a Musical Riddle</h1>
    <h3>Adivina la portada de los álbumes</h3>
  </div>);
}