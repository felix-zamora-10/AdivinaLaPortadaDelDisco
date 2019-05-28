import React from 'react';
import { InformacionDerecha } from './InformacionDerecha';
import { ImagenPrincipal } from './ImagenPrincipal';
import Grid from '@material-ui/core/Grid';
import store from '../Store/ConfiguracionStore';

export class Contenedor extends React.Component {

  render() {
    let imgPrincipal = {
      colorInicial: store.getState().ColorImagen,
      imagenInicial: store.getState().Imagen
    }
    let infoDerecha = {
      color: store.getState().Color,
      puntos: store.getState().Puntos,
      portadaFiltrada: store.getState().PortadaFiltrada,
      mostrarLi: store.getState().MostrarLi,
      mostrarBtn: store.getState().Mostrar,
      textoBtn: store.getState().TextoBoton
    }
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={5}>
            <ImagenPrincipal Propiedades = {imgPrincipal}></ImagenPrincipal>
          </Grid>
          <Grid item xs={12} sm={7}>
            <InformacionDerecha Propiedades = {infoDerecha}></InformacionDerecha>
          </Grid>
        </Grid>
      </div>
    );
  };
}