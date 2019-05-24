import React from 'react';
import './index.css';
import './ContenedoresMateriaUI.css';
import { PieDePagina } from "./ComponentsMaterialUI/PieDePagina";
import { Encabezado } from "./ComponentsMaterialUI/Encabezado";
import { Contenedor } from "./ComponentsMaterialUI/Contenedor";
import { Categorias } from "./ComponentsMaterialUI/Categorias";
import Grid from '@material-ui/core/Grid';

class IndexMaterialUI extends React.Component {

  // componentDidMount(){
  //   store.subscribe(() => {
  //     this.setState({});
  //   })  
  // }  

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Encabezado></Encabezado>
          </Grid>
          <Grid item xs={12}>
            <Contenedor></Contenedor>
          </Grid>
          <Grid item xs={12}>
            <Categorias></Categorias>
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