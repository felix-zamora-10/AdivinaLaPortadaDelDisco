import React from 'react';
import { InformacionDerecha } from './InformacionDerecha';
import { ImagenPrincipal } from './ImagenPrincipal';
import store from '../Store/ConfiguracionStore'
import Grid from '@material-ui/core/Grid';

export class Contenedor extends React.Component {

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    })
  }

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <ImagenPrincipal></ImagenPrincipal>
          </Grid>
          <Grid item xs={12} sm={7}>
            <InformacionDerecha></InformacionDerecha>
          </Grid>
        </Grid>
      </div>
    );
  };
}