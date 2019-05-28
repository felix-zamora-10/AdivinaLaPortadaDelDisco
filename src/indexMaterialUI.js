import React from 'react';
import './index.css';
import './ContenedoresMateriaUI.css';
import { PieDePagina } from "./ComponentsMaterialUI/PieDePagina";
import { Encabezado } from "./ComponentsMaterialUI/Encabezado";
import { Contenedor } from "./ComponentsMaterialUI/Contenedor";
import { Categorias } from "./ComponentsMaterialUI/Categorias";
import Grid from '@material-ui/core/Grid';
import store from './Store/ConfiguracionStore';

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
        store.dispatch({
          type: 'ComenzarAplicacion',
          payload: response
        })
      })
      .catch(error => console.log(error)); 
  }
//{foo.length > 1 ? <Categorias CategoriasDisponibles = {foo}></Categorias>: null}
  render() {
    let categorias = store.getState().Categorias;
    let tabSeleccionado = store.getState().TabSeleccionada;
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Encabezado></Encabezado>
          </Grid>
          <Grid item xs={12}>
            <Contenedor></Contenedor>
          </Grid>
          <Grid item xs={12}>
            <Categorias CategoriasDisponibles = {categorias} TabElegido = {tabSeleccionado} ></Categorias>
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