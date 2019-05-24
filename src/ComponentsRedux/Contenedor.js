import React from 'react';
import { InformacionDerecha } from './InformacionDerecha';
import { ImagenPrincipal } from './ImagenPrincipal';
import { PieDePagina } from "./PieDePagina";
import { Encabezado } from "./Encabezado";
import store from '../Store/ConfiguracionStore'

export class Contenedor extends React.Component {

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    })
  }

  render() {
    return (<div style={{ backgroundColor: store.getState().ColorEncabezado }}>
      <Encabezado />
      <ImagenPrincipal />
      <InformacionDerecha />
      <PieDePagina />
    </div>);
  }
}
