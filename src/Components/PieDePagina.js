import React from 'react';
export function PieDePagina({ author, books }) {
  return (<div className="PieDePagina">
    <label>&copy; El Barto, Inc. - Todos los derechos reservados {(new Date().getFullYear())}.</label>
  </div>);
}
