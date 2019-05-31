import React from 'react';
import './index.css';
import './ContenedoresMateriaUI.css';
import { PieDePagina } from "./ComponentsMaterialUI/PieDePagina";
import { Encabezado } from "./ComponentsMaterialUI/Encabezado";
import { Contenedor } from "./ComponentsMaterialUI/Contenedor";
import { Categorias } from "./ComponentsMaterialUI/Categorias";
import { Cargando } from "./ComponentsMaterialUI/Cargando";
import Grid from '@material-ui/core/Grid';
import store from './Store/ConfiguracionStore';
import { ComenzarAplicacion, CambiarCategoria } from './Store/Actions';

class IndexMaterialUI extends React.Component {

  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    }) 
    
    const serviceUrl = 'http://localhost:58103/Api/Values';
    fetch(serviceUrl)
      .then((res) => {
        return res.json();
      }).then((response) => {
        store.dispatch(ComenzarAplicacion(response));
        store.dispatch(CambiarCategoria(0));
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(store.getState());
    let categorias = store.getState().CategoriasReducer.Categorias;
    let tabSeleccionado = store.getState().CategoriasReducer.TabSeleccionada;
    let estaCargando = store.getState().CicloDelJuegoReducer.Cargando;
 
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Encabezado></Encabezado>
          </Grid>
          <Grid item xs={12}>
            {estaCargando ? <Cargando></Cargando> : <Contenedor></Contenedor>}
          </Grid>
          <Grid item xs={12}>
            {estaCargando ? null : <Categorias CategoriasDisponibles = {categorias} TabElegido = {tabSeleccionado} ></Categorias>}
          </Grid>
          <Grid item xs={12}>
            <PieDePagina></PieDePagina>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default IndexMaterialUI;