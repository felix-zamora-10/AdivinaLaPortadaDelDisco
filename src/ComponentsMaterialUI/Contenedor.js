import React from 'react';
import { InformacionDerecha } from './InformacionDerecha';
import { ImagenPrincipal } from './ImagenPrincipal';
import Grid from '@material-ui/core/Grid';
import store from '../Store/ConfiguracionStore';

export class Contenedor extends React.Component {

  render() {
    let imgPrincipal = {
      colorInicial: store.getState().CicloDelJuegoReducer.ColorImagen,
      imagenInicial: store.getState().ContestarPreguntasReducer.Imagen
    }
    let infoDerecha = {
      color: store.getState().ContestarPreguntasReducer.Color,
      puntos: store.getState().ContestarPreguntasReducer.Puntos,
      portadaFiltrada: store.getState().ContestarPreguntasReducer.PortadaFiltrada,
      mostrarLi: store.getState().ContestarPreguntasReducer.MostrarLi,
      mostrarBtn: store.getState().ContestarPreguntasReducer.Mostrar,
      textoBtn: store.getState().ContestarPreguntasReducer.TextoBoton
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